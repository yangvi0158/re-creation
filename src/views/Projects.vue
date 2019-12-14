<template>
  <div class="projects">
    <div class="project-category">
      <h6>01</h6>
      <h1>屮屮之間，</h1>
      <p>這片土地上的大小事，這片土地「艸」網羅了千千萬萬個故事。</p>
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
      <h1>日日之間，</h1>
      <p>生活日常的故事，這些有趣的故事彙集成「昍」，如同滿片星星般光明閃亮。</p>
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
      <h1>手手之間，</h1>
      <p>在每雙巧手之間，打造出的工藝故事，兩手之間「抙」引聚匯流了這些工藝故事。</p>
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
      <h1>人人之間，</h1>
      <p>人與人之間的故事，這些故事的交集成了「从」，象徵著跟隨前人的引導前進。</p>
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
