
window.addEventListener('load', init);

function init(){
	//サイズを指定
	const width=960;
	const height=480;

	//レンダラーを作成
	const renderer = new THREE.WebGLRenderer({
		canvas:document.querySelector('#MyCanvas-frame')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width,height);
	
	//シーンを作成
	const scene = new THREE.Scene();
	
	var loader = new THREE.TextureLoader();
	var texture=loader.load("./img/sample.jpg");
	
	//玉を作成
	const geometry = new THREE.SphereGeometry(5,60,40);
	geometry.scale( - 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial({map: texture}) 
	const sphere = new THREE.Mesh(geometry,material);
	scene.add(sphere);
	
	//カメラを作成
	const camera = new THREE.PerspectiveCamera(75, width / height,1,10000);
	camera.position.set(0,0,0.1);
	//camera.lookAt(sphere.position);
	
	var controls = new THREE.OrbitControls(camera);
	controls.autoRotate = true;
	controls.autoRotateSpeed = 1.5;

	Animation();
	
	function Animation(){
	//	sphere.rotation.y +=0.0001;
		controls.update();
		renderer.render(scene,camera);
		requestAnimationFrame(Animation);
	}
	
}