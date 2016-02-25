import Ember from 'ember';

export default Ember.Component.extend({

        dynamic_class : ['hidediv'],// No I18N
        selected_type: "Yes",   // No I18N
        field_types: [  {value: "Yes" },  // No I18N
                        {value: "No"} ],  // No I18N

        actions:{
                changeClass: function( obj ){
                        var self = this,
                        class_name = self.get('dynamic_class') === 'hidediv' ? 'showdiv' : 'hidediv';// No I18N
                        self.set('dynamic_class', class_name);// No I18N
                        if (obj){
                                self.set('selected_type', obj.value);// No I18N
                        }
                }
        }
});
