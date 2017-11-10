addObjectDefinition({
	name: 'Cube',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = Math.random()*2-1;obj.position.y = Math.random()*2-1;obj.position.z = Math.random()*2-1;'},
		{name: 'animation', type: 'statement', default: 'obj.rotation.x += 0.01; obj.rotation.y += 0.02;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(attributes.size,attributes.size,attributes.size), graphics.MeshBasicMaterial({color: 0xFF0000}));
	}
});

addObjectDefinition({
	name: 'Sphere',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'widthSegments', type: 'value', default: 20},
		{name: 'heightSegments', type: 'value', default: 20},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = Math.random()*2-1;obj.position.y = Math.random()*2-1;obj.position.z = Math.random()*2-1;'},
		{name: 'animation', type: 'statement', default: 'obj.rotation.x += 0.01; obj.rotation.y += 0.02;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.SphereGeometry(attributes.size,attributes.widthSegments,attributes.heightSegments), graphics.MeshBasicMaterial({color: 0x00FF00}));
	}
});

addObjectDefinition({
	name: 'Plane',
	attributes: [
		{name: 'width', type: 'value', default: 6},
		{name: 'height', type: 'value', default: 6},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = 0;obj.position.y = -1;obj.position.z = 0; obj.rotation.x = -1.57;'},
		{name: 'animation', type: 'statement', default: ' obj.rotation.z += 0.01;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.PlaneGeometry(attributes.width, attributes.height), graphics.MeshBasicMaterial({color: 0x0000FF}));
	}
});

addObjectDefinition({
	name: 'Cone',
	attributes: [
		{name: 'radius', type: 'value', default: 1},
		{name: 'height', type: 'value', default: 2},
		{name: 'initialization', type: 'statement', default: 'obj.position.x = 0;obj.position.y = -1;obj.position.z = 0;'},
		{name: 'animation', type: 'statement', default: 'obj.rotation.x += 0.01; obj.rotation.z += 0.02;'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.ConeGeometry(attributes.radius, attributes.height), graphics.MeshBasicMaterial({color: 0xF0F000}));
	}
});

loadBlockDefinitions();