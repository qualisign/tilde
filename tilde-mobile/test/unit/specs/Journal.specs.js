import Vue from 'vue'
import Journal from '@/components/Journal'

describe('Journal.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

    // the journal component contains a list of recent updates up to a day old
    // use can select which updates to include in journal entry.  by default, all are selected.
    // clicking the edit button on an entry opens an edit dialog.
    // the edit dialog contains options for publishing entry incuding:    
    // add photos
    // add text
    // default text desribing update can't be changed and appears red
    // clicking preview shows a preview of the post    
    // clicking 'publish' opens a dialog asking to confirm 
    
   
})
