import Vue from 'vue'
import Skills from '@/components/Skills'

describe('Skills.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

    // the skills component contains a list of cards corresponding to all available skills
    // before goals have been completed, the only available skill is willpower
    // after the completion of a goal, user is prompted to enter a skill
    // upon entering a skill, its level is set to 1
    
})
