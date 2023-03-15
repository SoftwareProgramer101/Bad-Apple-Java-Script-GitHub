// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image7")
                .setLeft("32em")
                .setTop("19.80952380952381em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.ProgressBar")
                .setHost(host,"xui_ui_progressbar5")
                .setLeft("22.095238095238095em")
                .setTop("25.142857142857142em")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label28")
                .setLeft("26.666666666666668em")
                .setTop("17.523809523809526em")
                .setWidth("15.39047619047619em")
                .setHeight("1.2190476190476192em")
                .setCaption("Bad Apple!! made in Crossui.com")
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label29")
                .setLeft("40.38095238095238em")
                .setTop("26.666666666666668em")
                .setWidth("6.247619047619048em")
                .setHeight("1.980952380952381em")
                .setCaption("Loading...")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});