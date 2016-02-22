import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return [
            {
                "res_name":"My Folders",
                "res_id":"folder",
                "is_opened":true,
                "subfolder": true,
                "children":[
                    {
                        "res_name": "Folder 1",
                        "res_id": "folder_1",
                        "is_opened": false,
                        "subfolder": true,
                        "children": [
                            {
                                "res_name": "Folder 11",
                                "res_id": "folder_11",
                                "is_opened": false,
                                "subfolder": true,
                                "children": []
                            },
                            {
                                "res_name": "Folder 12",
                                "res_id": "folder_12",
                                "is_opened": false,
                                "subfolder": true,
                                "children": []
                            },
                            {
                                "res_name": "Folder 13",
                                "res_id": "folder_13",
                                "is_opened": false,
                                "subfolder": true,
                                "children": []
                            }
                        ]
                    },
                    {
                        "res_name": "Folder 2",
                        "res_id": "folder_2",
                        "subfolder": false
                    },
                    {
                        "res_name": "Folder 3",
                        "res_id": "folder_3",
                        "is_opened": false,
                        "subfolder": true,
                        "children": [
                            {
                                "res_name": "Folder 31",
                                "res_id": "folder_31",
                                "subfolder": false
                            },
                            {
                                "res_name": "Folder 32",
                                "res_id": "folder_32",
                                "subfolder": false
                            },
                            {
                                "res_name": "Folder 33",
                                "res_id": "folder_33",
                                "subfolder": false
                            },
                            {
                                "res_name": "Folder 34",
                                "res_id": "folder_34",
                                "subfolder": false
                            }
                        ]
                    },
                    {
                        "res_name": "Folder 4",
                        "res_id": "folder_4",
                        "subfolder": false
                    }

                ]
            }
        ];
    }
});
