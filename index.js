var cameraFar = 5;
var theModel;
const MODEL_PATH = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/chair.glb";
const BACKGROUND_COLOR = 0xf1f1f1;
const scene = new THREE.Scene();
scene.background = new THREE.Color(BACKGROUND_COLOR );
scene.fog = new THREE.Fog(BACKGROUND_COLOR, 20, 100);

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});

document.body.appendChild(renderer.domElement);

var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = cameraFar;
camera.position.x = 0;

var loader = new THREE.GLTFLoader();

loader.load(MODEL_PATH, function(gltf) {
  theModel = gltf.scene;

// Set the models initial scale   
  theModel.scale.set(2,2,2);

  // Offset the y position a bit
  theModel.position.y = -1;

  // Add the model to the scene
  scene.add(theModel);

}, undefined, function(error) {
  console.error(error)
});

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();