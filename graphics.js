var Graphics = {};

Graphics.BoxGeometry = function(w, h, d){
	return new THREE.BoxGeometry(w,h,d);
}

Graphics.SphereGeometry = function(r, w, h){
	return new THREE.SphereGeometry(r,w,h);
}

Graphics.PlaneGeometry = function(w, h){
	return new THREE.PlaneGeometry(w,h);
}

Graphics.ConeGeometry = function(r, h){
	return new THREE.ConeGeometry(r,h);
}

Graphics.TeapotGeometry = function(s){
	return new THREE.TeapotBufferGeometry(s);
}

Graphics.CylinderGeometry = function(rT, rB, h){
	return new THREE.CylinderGeometry(rT, rB, h);
}

Graphics.TorusGeometry = function(r, t){
	return new THREE.TorusGeometry(r, t);
}

Graphics.BoxGeometry = function(w, h, d){
	return new THREE.BoxGeometry(w, h, d);
}



Graphics.MeshBasicMaterial = function(opts){
	return new THREE.MeshLambertMaterial(opts);
	//THREE.MeshLambertMaterial();
}

Graphics.Mesh = function(geometry, material){
	return new THREE.Mesh(geometry, material);
}

var objects = [];
Graphics.ClearScene = function(scene){
	while(scene.children.length > 0)
		scene.remove(scene.children[0]);
	objects = [];
}

Graphics.SceneFromCode = function(scene, code){
	function addToScene(createFn, initFn, animFn, attributes){
		var obj = createFn(Graphics, attributes);
		initFn(obj);
		objects.push({
			object: obj,
			animate: animFn,
			attributes: attributes
		});
		if(obj){
			scene.add(obj);
		}
			
	}
	eval('var obj;'+code);
	console.log('Created '+objects.length+' objects');
}

Graphics.AnimateScene = function(scene){
	objects.forEach((object) => object.animate(object.object));
}
