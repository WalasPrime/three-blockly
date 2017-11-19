

    /**
     *	ON/OFF blockly
    */
    function toggleBlockly() {
        var blocklyDiv = document.getElementById('editor');
        if (!blocklyDiv.style.display || blocklyDiv.style.display === 'block') {
            blocklyDiv.style.display = 'none';
        } else {
            blocklyDiv.style.display = 'block';
        }
    }

    /**
     *	EXPORT BLOCKS TO XML
    */
    function exportBlock() {
        var xml = Blockly.Xml.workspaceToDom(workspacePlayground);
        // var xml_text = Blockly.Xml.domToText(xml);
        var xml_text = Blockly.Xml.domToPrettyText(xml);
        // console.log(xml_text);
        download('blocks.xml', xml_text);
    }

    /**
     *	IMPORT XML TO BLOCKLY
    */
    function importBlocks() {
        var file = document.getElementById("import_file").files[0];
        // console.log(file);

        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (e) {
                var xml_text = e.target.result;
                var xml = Blockly.Xml.textToDom(xml_text);
                Blockly.Xml.domToWorkspace(xml, workspacePlayground);
            }
        }
    }

    /**
     *  CLEAR BLOCKLY WORKSPACE
    */
    function clearBlocks(){
        workspacePlayground.clear();
    }


    /**
     *	CREATE FILE AND DOWNLOAD
     *  @param string filename
     *  @param string text
    */
    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
