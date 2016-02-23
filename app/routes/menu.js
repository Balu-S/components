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
                        {'action': 'MoreAction', 'name': 'More', 'more' : 'moreItems',
                        'children': [{'action':'readAction', 'subname': 'Read Only' , 'children': []},
                                     {'action':'readWriteAction', 'subname': 'Read Write' , 'children': []},
                                     {'action':'CoOwnerAction', 'subname': 'Co Owner' , 'children': []},
                                   ]}];

    return name;
  }
});
