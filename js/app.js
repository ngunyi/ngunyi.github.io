/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */
particlesJS("particles-js", 
{
	"particles":{
		"number":{
			"value":104,
			"density":{
				"enable":true,
				"value_area":800
				}
				},
				"color":
				{
					"value":"#965252"
					},
					"shape":{
						"type":"circle",
						"stroke":{
							"width":0,
							"color":"#000000"
							},
							"polygon":
							{"nb_sides":5
							},
							"image":{
								"src":"img/github.svg",
								"width":100,
								"height":100
								}
								},
								"opacity":{
									"value":0.1763753266952075,
									"random":true,"anim":{
										"enable":false,
										"speed":1.136908097221883,
										"opacity_min":0.12993235396821523,
										"sync":true
										}
										},
										"size":{
											"value":15.782952832645451,
											"random":true,
											"anim":{
												"enable":true,
												"speed":40,
												"size_min":0.1,
												"sync":true
												}
												},
												"line_linked":{
													"enable":true,
													"distance":192.40944730386272,
													"color":"#aa7d8f",
													"opacity":0.4,
													"width":1.122388442605866
													},
													"move":{
														"enable":true,
														"speed":4.810236182596568,
														"direction":"none",
														"random":false,
														"straight":false,
														"out_mode":"out",
														"bounce":false,
														"attract":{
															"enable":false,
															"rotateX":600,
															"rotateY":1200
															}
															}
															},
															"interactivity":{
																"detect_on":"window",
																"events":{
																	"onhover":{
																		"enable":true,
																		"mode":"repulse"
																		},
																		"onclick":{
																			"enable":true,
																			"mode":"push"
																			},
																			"resize":true
																			},
																			"modes":{
																				"grab":{
																					"distance":400,
																					"line_linked":{
																						"opacity":1
																						}
																						},
																						"bubble":{
																							"distance":400,
																							"size":40,
																							"duration":2,
																							"opacity":8,
																							"speed":3
																							},
																							"repulse":{
																								"distance":200,
																								"duration":0.4
																								},
																								"push":{
																									"particles_nb":4
																									},
																									"remove":{"particles_nb":2
																									}
																									}
																									},
																									"retina_detect":true,
																									"config_demo": {
																										 "hide_card": false,
																											  "background_color": "#b61924",
																											  "background_image": "",
																											  "background_position": "50% 50%",
																											  "background_repeat": "no-repeat",
																											  "background_size": "cover"
																											}
     	
																									}
																									);
																									var count_particles, 
																									stats, update; 
																									stats = new Stats; 
																									stats.setMode(0); 
																									stats.domElement.style.position = 'absolute'; 
																									stats.domElement.style.left = '0px';
																									stats.domElement.style.top = '0px'; 
																									document.body.appendChild(stats.domElement); 
																									count_particles = document.querySelector('.js-count-particles'); 
																									update = function() { 
																									stats.begin();
																									stats.end(); 
																									if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array)
																										{ 
																									count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; 
																									} 
																									requestAnimationFrame(update); 
																									}; 
																									requestAnimationFrame(update);;
    
	
	
