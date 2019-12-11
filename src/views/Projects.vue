<template>
  <div class="projects">
    <div class="project-category">
      <h6>01</h6>
      <h1>壤壤之間</h1>
      <p>以當地特色為發想，融合巧思重新再組織，成為文化新風貌</p>
      <ul class="project-team">
        <button @click="openProject">OPEN</button>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="project-category">
      <h6>02</h6>
      <h1>壤壤之間</h1>
      <p>以當地特色為發想，融合巧思重新再組織，成為文化新風貌</p>
      <ul class="project-team">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="project-category">
      <h6>03</h6>
      <h1>壤壤之間</h1>
      <p>以當地特色為發想，融合巧思重新再組織，成為文化新風貌</p>
      <ul class="project-team">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

    <div class="project-category">
      <h6>04</h6>
      <h1>壤壤之間</h1>
      <p>以當地特色為發想，融合巧思重新再組織，成為文化新風貌</p>
      <ul class="project-team">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Work v-show="showProject" @close-product="showProject = false"/>
  </div>
</template>

<script>
import Work from '@/components/Work.vue'
export default {
  name: 'projects',
  components: {
    Work
  },
  data () {
    return {
      showProject: false
    }
  },
  methods: {
    openProject () {
      this.showProject = true
    }
  }
}
</script>
