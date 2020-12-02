<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { FieldPropsDefine, Schema } from '../types'

export default {
  props: FieldPropsDefine,
}
declare const props: {
  value: any
  onChange: (v: any) => void
  schema: Schema
}
export const handleChange = (e: any) => {
  const value = e.target.value
  const num = Number(value)
  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>
