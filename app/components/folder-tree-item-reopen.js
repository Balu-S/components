import Ember from 'ember';
import FolderTreeItemComponent from './folder-tree-item';

export default FolderTreeItemComponent.extend({
    doubleClick( event ){
        event.stopPropagation();
        this.send( "openSubFolder" );
    }
});
