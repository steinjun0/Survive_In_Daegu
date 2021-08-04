<template>
  <div>
    <v-row>
      <v-col
        cols="12"
        style="border-bottom: 1px solid black; padding: 25px"
        class="d-flex justify-space-between"
      >
        <div id="bag" class="d-flex justify-start">
          <v-icon>mdi-purse</v-icon>
        </div>
        <div id="money" class="d-flex justify-end">
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-currency-usd</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
          <v-icon>mdi-cards-heart</v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex; flex-direction:column;" style="font-size: 40px">
        {{ number }}곱하기 {{ number2 }}는?
        <div style="width: 200px">
          <v-text-field
            v-model="answer"
            :rules="nameRules"
            :counter="10"
            label="answer"
            required
            @keydown.enter="submitanswer"
          ></v-text-field>
        </div>
        <div>
          <v-btn
            type="submit"
            style="margin-left: 48px; font-size: 24px"
            @click="submitanswer"
          >
            입력!
          </v-btn>
        </div>
        <div id="result" style="font-size: 25px">{{ result }}</div>
        <div id="goal">{{ goal }}/5</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Gugudan",
  data() {
    return {
      number: Math.ceil(Math.random() * 9),
      number2: Math.ceil(Math.random() * 9),
      answer: "",
      result: "",
      nameRules: [
        (v) => !!v || "정답을 적으세요!",
        (v) => this.isNumeric(v) || "숫자만 쓰세요!",
      ],
      goal: 0,
    };
  },
  mounted() {},
  methods: {
    isNumeric(data) {
      return !isNaN(data);
    },
    submitanswer() {
      if (this.goal >= 5) {
        this.$router.push("/Game");
      } else if (this.number * this.number2 === parseInt(this.answer)) {
        this.result = "딩동댕!";
        this.goal += 1;
        this.number = Math.ceil(Math.random() * 9);
        this.number2 = Math.ceil(Math.random() * 9);
        this.answer = "";
        this.$refs.answer.focus();
      } else {
        this.goal = 0;
        this.result = "땡!";
        this.answer = "";
        this.$refs.answer.focus();
      }
    },
    submitgoal() {
      // if (this.number * this.number2 === parseInt(this.answer)){
      //   (this.paragraphIndex < 1) {
      //   this.paragraphIndex = this.paragraphIndex + 1
      // }
      // }
    },
  },
};
</script>

<style>
</style>