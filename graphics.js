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