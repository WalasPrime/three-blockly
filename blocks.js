addObjectDefinition({
	name: 'Cube',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
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
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.SphereGeometry(attributes.size,attributes.widthSegments,attributes.heightSegments), graphics.MeshBasicMaterial({color: 0x00FF00}));
	}
});

addObjectDefinition({
	name: 'Translate',
	attributes: [
		{name: 'dx', type: 'value', default: 0},
		{name: 'dy', type: 'value', default: 0},
		{name: 'dz', type: 'value', default: 0}
	],
	transform: function(object, attributes){
		if(object){
			object.position.x += (attributes.dx);
			object.position.y += (attributes.dy);
			object.position.z += (attributes.dz);
		}
	}
});

addObjectDefinition({
	name: 'Rotate',
	attributes: [
		{name: 'rx', type: 'value', default: 0},
		{name: 'ry', type: 'value', default: 0},
		{name: 'rz', type: 'value', default: 0}
	],
	transform: function(object, attributes){
		if(object){
			object.rotateX((attributes.rx));
			object.rotateY((attributes.ry));
			object.rotateZ((attributes.rz));
		}
	}
});

addObjectDefinition({
	name: 'Color',
	attributes: [
		{name: 'color', type: 'color', default: '#0F0'}
	],
	transform: function(object, attributes){
		if(object){
			console.log(attributes.color);
			object.material.color.set(attributes.color);
		}
	}
});

addObjectDefinition({
	name: 'Plane',
	attributes: [
		{name: 'width', type: 'value', default: 6},
		{name: 'height', type: 'value', default: 6},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
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
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.ConeGeometry(attributes.radius, attributes.height), graphics.MeshBasicMaterial({color: 0xF0F000}));
	}
});

addObjectDefinition({
	name: 'Teapot',
	attributes: [
		{name: 'size', type: 'value', default: 1},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.TeapotGeometry(attributes.size), graphics.MeshBasicMaterial({color: 0xf18507}));
	}
});

addObjectDefinition({
	name: 'Cylinder',
	attributes: [
		{name: 'radiusTop', type: 'value', default: 2},
		{name: 'radiusBottom', type: 'value', default: 2},
		{name: 'height', type: 'value', default: 10},
		{name: 'radiusSegments', type: 'value', default: 16},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.CylinderGeometry(attributes.radiusTop, attributes.radiusBottom, attributes.height, attributes.radiusSegments), graphics.MeshBasicMaterial({color: 0x36f6c8}));
	}
});

addObjectDefinition({
	name: 'Torus',
	attributes: [
		{name: 'radius', type: 'value', default: 5},
		{name: 'tube', type: 'value', default: 1},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.TorusGeometry(attributes.radius, attributes.tube), graphics.MeshBasicMaterial({color: 0xdddddd}));
	}
});

addObjectDefinition({
	name: 'Box',
	attributes: [
		{name: 'width', type: 'value', default: 4},
		{name: 'height', type: 'value', default: 5},
		{name: 'depth', type: 'value', default: 5},
		{name: 'initialization', type: 'statement'},
		{name: 'animation', type: 'statement'}
	],
	create: function(graphics, attributes){
		return new graphics.Mesh(graphics.BoxGeometry(attributes.width, attributes.height, attributes.depth), graphics.MeshBasicMaterial({color: 0xe3bd34}));
	}
});

loadBlockDefinitions();
