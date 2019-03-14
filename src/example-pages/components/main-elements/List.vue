<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row">
        <h1 class="col rt-font-hero">
          List elements
        </h1>
      </div>
      <div class="app-body d-flex row">
        <div class="rt-col rt-col-4 rt-col-td-3 rt-col-md-3">
          <pre-code
            text="
          <div>
          <h4 class=&quot;rt-font-bold rt-space-bottom&quot;>Title</h4>
          <ul class=&quot;rt-numeric-list&quot;>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 1</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 2</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 3</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 4</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5 List item 5</li>
          </ul>
          <ul class=&quot;rt-ordered-list rt-space-top2&quot;>
            <li class=&quot;rt-ordered-list__item rt-font-paragraph&quot;>List item</li>
            <li class=&quot;rt-ordered-list__item rt-font-paragraph&quot;>List item</li>
            <li class=&quot;rt-ordered-list__item rt-font-paragraph&quot;>List item</li>
            <li class=&quot;rt-ordered-list__item rt-font-paragraph&quot;>List item</li>
            <li class=&quot;rt-ordered-list__item rt-font-paragraph&quot;>List item</li>
          </ul>
          <ul class=&quot;rt-numeric-list rt-space-top2 rt-space-bottom2&quot;>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 1</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 2</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 3</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 4</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 5</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 6</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 7</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 8</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 9</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 10</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 11</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 12</li>
            <li class=&quot;rt-numeric-list__item rt-font-paragraph&quot;>List item 13</li>
          </ul>
          </div>
          "
          />
        </div>

        <div class="rt-col rt-col-8 rt-col-td-3 rt-col-md-3">
          <pre-code
            text="
<div>
  <h3 class=&quot;rt-font-bold rt-space-bottom15&quot;>
    Часто задаваемые вопросы
  </h3>
  <ul class=&quot;rtb-faq-unordered-list&quot;>
    <li class=&quot;rtb-faq-unordered-list__item&quot;>
      <rt-annotation
        label=&quot;Как расторгнуть договор, если нет возможности пойти в офис?&quot;
      >
        <template slot=&quot;content&quot;>
          <p class=&quot;rt-font-small-paragraph&quot;>
            При наличии технической возможности мы организуем
            предоставление услуг по новому адресу без Подробнее об акции
            «Переезд».
          </p>
          <p
            class=&quot;rt-font-small-paragraph rt-space-top rt-space-bottom&quot;
          >
            В этом случае действия зависят от вашей ситуации:
          </p>
          <ul class=&quot;rt-numeric-list&quot;>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной очень очень очень длинной строки 16px,
              слишком длинная строка
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
          </ul>
        </template>
      </rt-annotation>
    </li>
    <li class=&quot;rtb-faq-unordered-list__item&quot;>
      <rt-annotation
        label=&quot;Как расторгнуть договор, если нет возможности пойти в офис?&quot;
      >
        <template slot=&quot;content&quot;>
          <p class=&quot;rt-font-small-paragraph&quot;>
            При наличии технической возможности мы организуем
            предоставление услуг по новому адресу без Подробнее об акции
            «Переезд».
          </p>
          <p
            class=&quot;rt-font-small-paragraph rt-space-top rt-space-bottom&quot;
          >
            В этом случае действия зависят от вашей ситуации:
          </p>
          <ul class=&quot;rt-numeric-list&quot;>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной очень очень очень длинной строки 16px,
              слишком длинная строка
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
          </ul>
        </template>
      </rt-annotation>
    </li>
    <li class=&quot;rtb-faq-unordered-list__item&quot;>
      <rt-annotation
        label=&quot;Как расторгнуть договор, если нет возможности пойти в офис?&quot;
      >
        <template slot=&quot;content&quot;>
          <p class=&quot;rt-font-small-paragraph&quot;>
            При наличии технической возможности мы организуем
            предоставление услуг по новому адресу без расторжения
            договора. Подробнее об акции «Переезд».
          </p>
          <p
            class=&quot;rt-font-small-paragraph rt-space-top rt-space-bottom&quot;
          >
            В этом случае действия зависят от вашей ситуации:
          </p>
          <ul class=&quot;rt-numeric-list&quot;>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-numeric-list__item rt-font-small-paragraph&quot;>
              Пример обычной очень очень очень длинной строки 16px,
              слишком длинная строка
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
            <li class=&quot;rt-ordered-list__item rt-font-small-paragraph&quot;>
              Пример обычной строки 16px
            </li>
          </ul>
        </template>
      </rt-annotation>
    </li>
  </ul></div>
"></pre-code>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppPrice",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {},
  created() {},
  methods: {}
};
</script>
