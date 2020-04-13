<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      name="tekst"
      @blur="$v.name.$touch()"
      placeholder=" Name"
      class="input-field"
      :class="{ invalid: $v.name.$error }"
      v-model="name"
      autocomplete="off"
    >
    <p class="error-message" v-if="!$v.name.required && $v.name.$dirty">Name is required</p>
    <p
      class="error-message"
      v-if="!$v.name.minLength"
    >Name must have at least {{$v.name.$params.minLength.min}} letters.</p>

    <input
      type="email"
      class="input-field"
      @blur="$v.email.$touch()"
      :class="{ invalid: $v.email.$error }"
      placeholder=" Email Address"
      v-model="email"
      autocomplete="off"
    >
    <p class="error-message" v-if="!$v.email.required && $v.email.$dirty">Email is required</p>
    <p class="error-message" v-if="!$v.email.email">Enter valid email.</p>

    <input
      type="text"
      name="subject"
      placeholder=" Subject"
      :class="{ invalid: $v.subject.$error }"
      @blur="$v.subject.$touch()"
      class="input-field"
      autocomplete="off"
    >
    <p
      class="error-message"
      v-if="!$v.subject.minLength"
    >Name must have at least {{$v.subject.$params.minLength.min}} letters.</p>
    <p class="error-message" v-if="!$v.subject.required && $v.subject.$dirty">Subject is required</p>

    <textarea
      class="input-text"
      rows="10"
      maxlength="500"
      :class="{ invalid: $v.textarea.$error }"
      @input="$v.textarea.$touch()"
      v-model="textarea"
    ></textarea>
    <p
      class="error-message"
      v-if="!$v.textarea.required && $v.textarea.$dirty"
    >Textarea must not be empty.</p>
    <p class="error-message" v-if="!$v.textarea.minLength">You cannot enter less than 10 characters</p>
  </form>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      textarea: ""
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    email: {
      required,
      email
    },
    subject: {
      required,
      minLength: minLength(3)
    },
    textarea: {
      minLength: minLength(10),
      required
    }
  }
};
</script> 
<style>
.invalid {
  border: 2px solid red !important;
}
.input-field {
  width: 350px;
  height: 45px;
  border: 2px solid #8a8888;
  box-sizing: border-box;
  margin-bottom: 20px;
  outline: none;
}
input.input-field {
  margin-bottom: 5px;
}
.error-message {
  color: red !important;
}
#text-area {
  margin-top: -5px;
  margin-bottom: 10px;
}
.input-text {
  width: 560px;
  height: 221px;
  border: 2px solid #8a8888;
  margin-bottom: 10px;
}
</style>
