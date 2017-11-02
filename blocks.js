addObjectDefinition({
	name: 'Cube',
	attributes: [],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(1,1,1), graphics.MeshBasicMaterial({color: 0xFF0000}));
	}
});

loadBlockDefinitions();