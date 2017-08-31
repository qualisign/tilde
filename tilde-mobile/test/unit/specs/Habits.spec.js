import Vue from 'vue'
import Habits from '@/components/Habits'

describe('Habits.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
    // the habits component is divided into recordings and daily snapshot
    // if no snapshot has been made, only the 'take snapshot' button is available.  daily snapshot section is disabled.
    // clicking the take snapshot button opens snapshot settings
    // snapshot settings include increments
    // snapshot settings include notification settings
    // snapshot settings include start and end times

})
