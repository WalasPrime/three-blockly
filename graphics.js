var Graphics = {};

Graphics.BoxGeometry = function(w, h, d){
	return new THREE.BoxGeometry(w,h,d);
}

Graphics.MeshBasicMaterial = function(opts){
	return new THREE.MeshBasicMaterial(opts);
}

Graphics.Mesh = function(geometry, material){
	return new THREE.Mesh(geometry, material);
}

Graphics.ClearScene = function(scene){
	while(scene.children.length > 0)
		scene.remove(scene.children[0]);
}

Graphics.SceneFromCode = function(scene, code){
	var objects = [];
	function addToScene(createFn, initFn, animFn, attributes){
		var obj = createFn(Graphics, attributes);
		initFn(obj);
		objects.push(obj);
		scene.add(obj);
	}
	eval(code);
	console.log('Created '+objects.length+' objects');
}
