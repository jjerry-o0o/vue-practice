<template>
  <h1 class="text-2xl mt-10">{{name}} 입니당</h1>
  <!-- 부모 자식 prop 전달 연습 -->
  <Button class="amber" text="Name Change Click!" @click="changeName"></Button>
  <button :class="colorClass.blue" @click="changeColor">Color Change Click!</button>
  <h1 :class="reactiveClass.color" @click="changeReactive">reactive 연습 입니당 {{reactiveClass.text}}</h1>

  <!-- 부모 자식 객체 전달 연습 -->
  <LabelInput ></LabelInput>

</template>

<script setup>
import {ref, reactive} from "vue";
import Button from "@/components/Button.vue";
import LabelInput from "@/components/LabelInput.vue";

const name = ref("제리");
const colorClass = reactive({
  blue: "bg-blue-600"
});
const reactiveClass = reactive({
  color: "bg-pink-200",
  text: "클릭 해보면 놀라실걸료 ~~",
});

const changeName = () => {
  name.value = name.value === "제리" ? "뽀롱" : "제리";
};

const changeColor = () => {
  colorClass.blue = colorClass.blue === "bg-blue-600" ? "bg-blue-200" : "bg-blue-600";
}

const changeReactive = () => {
  reactiveClass.color = reactiveClass.color === "bg-pink-200" ? "bg-pink-500" : "bg-pink-200";
  reactiveClass.text = reactiveClass.text === "짠 !" ? "클릭 해보면 놀라실걸료 ~~" : "짠 !";
}
</script>
