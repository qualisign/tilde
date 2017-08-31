import Vue from 'vue'
import Goals from '@/components/Goals'

describe('Goals.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
    // the goals component is divided into change habit and goal list sections

    // the change habit section contains an add habit and a remove habit button

    // clicking the remove habit button opens a list of habits to choose from
    // choosing a habit to remove prompts user to associate it with skills/time/etc
    // clicking the add habit button opens setting that include:

    // time settings: frequency, duration, etc
    // skills
    // if skills haven't been added yet, they are locked
    // otherwise, a skill dropdown allows user to add skill to habit

})

var month = function(){
    var months = ['January', 'February', 'March'];
    this.name = return function(num){
	return months[num-1]
    };
    this.number = return function(nam){
	return months.indexOf(number) + 1;
    };

}
