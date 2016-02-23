import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var name = [{'action': 'createfolderAction', 'name':'Create New'},
                {'action': 'OpenAction', 'name':'Open'},
                  {'action': 'ShareAction', 'name':'Share'},
                    {'action': 'CutAction', 'name':'Cut'},
                      {'action': 'CopyAction', 'name':'Copy'},
                        {'action': 'PasteAction', 'name':'Paste'},
                        {'action': 'RenameAction', 'name':'Rename'},
                        {'action': 'DuplicateAction', 'name':'Duplicate'},
                        {'action': 'DownloadAction', 'name':'Download'},
                        {'action': 'More', 'name': 'More', 'more' : 'moreItems', 'children': [{'action':'readAction', 'subname': 'Read Only' , 'children': []},[{'action':'readWriteAction', 'subname': 'Read Write' , 'children': []},
                        [{'action':'coOwnerAction', 'subname': 'Co Owner' , 'children': []}}, ]; // No I18N

    return name;
  }
});
