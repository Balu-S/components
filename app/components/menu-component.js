import Ember from 'ember';

export default Ember.Component.extend({

  subMenuObj : [],
  isShowSubMenu: false,

  mouseMove( event ){
    event.stopPropagation();
    var subMenus = this.get('menuItem.children');
    this.set('subMenuObj', subMenus);
    console.log(this.get('isShowSubMenu'));
    if(subMenus.length){
      this.set('isShowSubMenu', true);
    }
    else {
      this.set('isShowSubMenu', false);
    }
  }
});
