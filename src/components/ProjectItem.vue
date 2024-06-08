<template>
  <div class="item">
    <slot name="media-left"></slot>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot name="description"></slot>
      <slot name="link"></slot>

    </div>
    <slot name="media-right"></slot>
  </div>
</template>

<script>
export default {
  name: ''
}
</script>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  margin-right: auto;
  margin-left: auto;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.7rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
  font-family: "comfortaa";
}

@media (min-width: 1024px) {
  .item {
    margin-top: 85px;
    margin-bottom: 85px;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
    position: relative;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 3px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }
}
</style>
