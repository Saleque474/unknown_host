'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/index": "4af70cbc6986cfe662a5f97c89853bde",
".git/COMMIT_EDITMSG": "0114d3cdcec6043bf876f01e0cde5446",
".git/refs/remotes/origin/main": "a55cb4c20fc1e53fdf84a3112f5b65ce",
".git/refs/heads/main": "a55cb4c20fc1e53fdf84a3112f5b65ce",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/9fed7d734b8d0263df199771961f46c5530cbb": "f4a820632c37e12fca9a1bef55d99526",
".git/objects/7c/b4778afdcf4fc22843700083e6ad77dc339d03": "689843610d6bf9066434eb008e00c112",
".git/objects/33/8530eca96fe6b3245b9a69567ea234ce64d988": "59f9faec0127e9a07188478177fff718",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9f/a2fbe87ffb640cfe3353cf503294591cccb877": "901d897e6bb2ab7c958d2431916a4ad9",
".git/objects/c1/2dbb33d0428c3f892044ce3ba2e2aadf8d4414": "301f84d8936e5676ca2f7eb6970064fc",
".git/objects/d5/e2cc365a763be91d22e28cde3623757a7d90df": "7746405f4f884b2e49220ec3f30e39fb",
".git/objects/90/ecd0875417650edde141b40c37fac68273a2a7": "455f3c0dfd7f44134b69bd34b57a30c7",
".git/objects/ea/e87ca0f91fcf823b46e4b2369bbee558384d8a": "91c874563977ae806267334e8af9b883",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3d/680f3b266bce38a2530e8c2ef776e108fe0649": "f808493a6467e42aa307d267529a3e14",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/a9db6c14ff899c32fa9aca96695fbc0b6f7660": "c4d1fb8a72d1f4988b386c8513cbd178",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/30/f3512e00c52d8f321e91dc7496333cc91a91b0": "9bd464955937e5cbd781fd0078fca82f",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/7f/5818ed554ec965585be9a17c827f00ca90fd0d": "4f05e22c75ece2585293870a7f54476c",
".git/objects/7f/37654fb765eac280ff5abe83d2c302caca841d": "36fb17e9aba296f76dac2ba513c7c307",
".git/objects/8c/d69701a7454f5a7f7f34b6473efa3e57005ebf": "4fc61ae37b4fce860458edd762074068",
".git/objects/8b/7900114d91cfffc3c780abb9d99be5bb959edb": "956d2cee170b1500922108c3efb54f5b",
".git/objects/80/88ef62eaa023f163d0782eb4cd1b3db80897a3": "8be38a4304a31e19e04122c73965d6bd",
".git/objects/2a/8b54d39e8a329c8b7cb3971770a5fa73427aa9": "0b2936a888b6398f554b5ed6f70f5ce9",
".git/objects/43/75142558c0ef58fa237a04713727738f64c833": "c9f53396f7b21da8ece55714b0c1e29d",
".git/objects/b1/57b8199fd80bfd853b62219144aa99ced683e4": "99ebd11c31820e64ba2ca974d3d219be",
".git/objects/77/1e9e1729430d5879d059f6c7aec8c479f806a4": "54e6d470f3c40730c1a457dbc69f3d12",
".git/objects/26/dfc8b22131eb52704d3114c77a8016c26d31bb": "c073523812bc7f5d576c7d554e5e96c6",
".git/objects/ee/395d36c17a53be9fba6e4fa8c04353d1b880f4": "a1c9b43cf277bbe8cd55b06e141dd241",
".git/objects/e9/88590cfc978c4922e9f7f10c5162dcec5f7ebf": "6955ed4e7c08777596fe1daee91ec23a",
".git/objects/6a/0de7920b1201a42d526e572573ea5d67b33087": "54b6d2bff387206de48498d2a982a562",
".git/objects/23/70fd45284eaf4235cd0dad6773253e70be8e31": "f2dd8da049cc1965ef69a7c834113e96",
".git/objects/bd/5ee4cd3adf7ff6b64bea3a5f1bdfabbdb619e2": "e051f4d0c5d993be23b536ca8a9ff6ed",
".git/objects/bd/b8920efe719c0131c232061c6361028b3b4f77": "134d36d2598c09cdeccb97175ae78193",
".git/objects/c6/968a0c566413819ce0f8f3b22fac5e414e89a7": "7e768c298b3ce0727d777a72ecb7d447",
".git/objects/f4/378d0835e4411306978276f1d786af3d6e88d7": "58f3c232b79746e4d8a951bb2bc3dfa6",
".git/objects/96/3524e0d971328a1ce3743838bcc8613b2b0719": "a1083a90311af1c2ce70398aa48e0507",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/0b/b717945fccde48799915c2ad4b8c19d0f4180d": "d7651a81df5dbe6fa4a562193afe554e",
".git/objects/df/e191e2a62ec43fe1f89fbd6dc854f447cc67b6": "67e2d10598d180f3f97f97d2f026fb7b",
".git/objects/3f/c565b9bd26e07f7a75f288203b3f6abe1a9334": "69180a9035f27ef129ad99a75edc2905",
".git/objects/48/751118beda476ac67812a60e3ade91531b0ac2": "0aac2688b339345f441ecbf78c1c05c2",
".git/objects/1b/8cfa6338d61401d856fc62084e477b54454170": "ff2768b0128fe854478b1fca0872e94e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/0d/bd1552e72f034ee7e17a1db1b3099b8fc70a89": "cdb0d168131e5dbc9a47e85c328d6ffb",
".git/objects/67/4e03993255c8f8f85d1745d3935ac85ceb8086": "bc34542903d9e9e940908c40f0c7f13e",
".git/objects/f2/b352b7462469a01a1e9f26dfabd4ae9a9ca344": "c83620c77de37c51f4390468a62b113c",
".git/objects/d7/082a9bf1cc47a65c898242dc54f243c641f13b": "4d383296687507f76e389d2ee249374e",
".git/objects/a4/aef8b4fa13dc92dc44d529e9b912eb96e52e6d": "c9f4298c48c9936bc5facf90cdda7808",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/70d89d2571d711f8432ff7da866945f3c37c39": "efa104caea6e8a4c049dc020c3791fc8",
".git/objects/ae/75477b0e572c09517ac38e163210d533976663": "bf6e9bae2b0a5df8f83c7e4b4b5a29a4",
".git/objects/f7/bae9d0ddd85de3059a6d68dd21451197c59b79": "30b0880f50f7b55662d94ae961b5bbfd",
".git/objects/12/3e261be6bcb885e174156de87589402b9dc135": "4c449745d8873c01070ee0298547a012",
".git/objects/78/784f8e94a4d55b5599a966984b784817fdc129": "7547aa75bd0ccfbaf9674956c0c79fbf",
".git/objects/55/e6f3f601200b233cbb00f0edb358e01cf03270": "69dacc751484db759d1520c1c80b487f",
".git/objects/55/232ec9e31a83c379469d13628b81bccc338d86": "df07b2a99527286710257b91d2d3b9b5",
".git/objects/00/c8dac3d10550d6770442ac91eda9bb2cd16434": "e4789fd91a2a295879266621e749852a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/1c/925e1cdcb9a0b829bbde19c6738ff15c790963": "23c53ce0d2a1e53cb104f574589eee5c",
".git/objects/de/80bf641e6fd45011df6f61c723ead13ca85193": "f1c0bfe0f3957265591e5612571b66b0",
".git/objects/de/03349669a0f8b3cc7baf947805babf349539c2": "ea659a14774d3109c54832f048bad357",
".git/objects/f9/8b44c6c0b5d3d905942d0b678cf60f578a0e75": "1427c000cd3a63943867581deffb630e",
".git/objects/a7/ed0ccef5a8304b64bc9d68b000891a4d1214f1": "72411836f1d71d9ce92844aa9cc3a49e",
".git/objects/7a/e335a718183ce6b191d043e77fdaf5a4647683": "492867f7df91b413074680b863beaa06",
".git/objects/ce/c86511998356ba8740984c1ba3e2e2f8cbf55c": "cfad42cd51a8a1a8b08a73100032549f",
".git/objects/6f/77c856c813b41a0f7e5e4a15d4ef5704c95af1": "2c75a1d253ac7b7d24fbc414e208c96e",
".git/objects/fc/9c81dcfe5d0565513a7942667bb9826318a238": "d7b6fbf0df3eebc7f4eaa731418f9571",
".git/objects/17/e54b5b12312fab2d280e7d496b8cc173b5176a": "2206ff96d93d556bc73698db34c3e520",
".git/objects/a5/27e7c7d287bfa23f7a07900c5d4c2083b67c9e": "f2aa82e5c2a7f70a6b633a98f234abc1",
".git/logs/refs/remotes/origin/main": "12bc4c028b6aa9ac7ba832f999c8f6ab",
".git/logs/refs/heads/main": "939fa22dc4c7694c3da383287f726012",
".git/logs/HEAD": "230efba6fe68a069858102787ed57a00",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "5a1fbed581ce5f27c536d4b679d13fad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"main.dart.js": "f3bc3de0a089a07d9195507dab0d3ce3",
"version.json": "22d9f5d4a412af3adcaccf61e8bc7a58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "bf785c2b7382e5eaa69d7e325b6f6772",
"index.html": "edf5014e798eac283bb231b86e94466e",
"/": "edf5014e798eac283bb231b86e94466e",
"assets/NOTICES": "11501d69e8439124b8508c5c0d9498f4",
"assets/AssetManifest.json": "3c3afe195b21855ffe8d17d752569b9e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/videos/Lesson43b.mp4": "5dd5949e1e899bc54c0e65be5f150812",
"assets/assets/videos/Lesson16b.mp4": "e525d74b27e3e6c9cecf2b5b2df46cba",
"assets/assets/videos/Lesson5b.mp4": "1f82eb836a5e8d324910f9e5b0ad0ba4",
"assets/assets/videos/Lesson39a.mp4": "9b561d23e0527f45c918ef9059321258",
"assets/assets/videos/Lesson21a.mp4": "0db97275ab7cf313a79f48bd3af7b979",
"assets/assets/videos/Lesson46b.mp4": "260d12afaf20da3d35ec7d91c8df6dea",
"assets/assets/videos/Lesson29b.mp4": "de40451d5fce2c7c297ca0928a7fa4c0",
"assets/assets/videos/Lesson35a.mp4": "b8c934375db87998f3cb1e2244112250",
"assets/assets/videos/Lesson31a.mp4": "b81b7c3fd9cb94d6fd0b76a4bc289e0c",
"assets/assets/videos/Lesson41b.mp4": "a8387a315fe3d634fd77da059bf2a8a7",
"assets/assets/videos/Lesson4b.mp4": "87516dc1c499fac32734b2cd1fe59806",
"assets/assets/videos/Lesson21b.mp4": "0f8013d9b678ebc8ce3a3b6e400f051f",
"assets/assets/videos/Lesson33a.mp4": "a481ba2d3fe6f62f6e6bfb640d0451dc",
"assets/assets/videos/Lesson10a.mp4": "2c5670e0a560ec482ec7510348608963",
"assets/assets/videos/Lesson2a.mp4": "84a5d3afcd542753c7d93a74f71b8bc5",
"assets/assets/videos/Lesson30b.mp4": "8c8a30f6d467f14502f92ac63185ff42",
"assets/assets/videos/Lesson1b.mp4": "3e91491feda8185302800efc3ce5d9df",
"assets/assets/videos/Lesson23b.mp4": "57ec437f7b325bf2a985e300ebe060f9",
"assets/assets/videos/Lesson18b.mp4": "cedf4c2bac0da55d42eb16a0e566949e",
"assets/assets/videos/Lesson25b.mp4": "bd7b217d03d1a5ded528407e1f8d8073",
"assets/assets/videos/Lesson19a.mp4": "43cb3ca3d7c6d6c1de43a9d4bd25976e",
"assets/assets/videos/Lesson32a.mp4": "b67fd59f4bcf9987a48f7b76e7faae0b",
"assets/assets/videos/Lesson8b.mp4": "10c2b5c270e26d83623c58c0b8303b7c",
"assets/assets/videos/Lesson48b.mp4": "a769c8faac67eb951485d0b33a9e362c",
"assets/assets/videos/Lesson12a.mp4": "fc380bb55b580466c7bd97b9867b498a",
"assets/assets/videos/Lesson29a.mp4": "065bea6c35215113f5bb7ab2831a2a8b",
"assets/assets/videos/Lesson16a.mp4": "427dd7f5169fbde8ed44c221905525f1",
"assets/assets/videos/Lesson20b.mp4": "fc05c404deeb4b1d70c9ac74fbf1f708",
"assets/assets/videos/Lesson7b.mp4": "e01aadacc82e226b3326bf7d887c9105",
"assets/assets/videos/Lesson36b.mp4": "aec204df50dc2291b92ff9c9320c98e6",
"assets/assets/videos/Lesson33b.mp4": "3c7e773c7d0f404f85c2e2e0463dbc5a",
"assets/assets/videos/Lesson19b.mp4": "8bc7cc1097506f9c0b619c45b2cddd70",
"assets/assets/videos/Lesson24a.mp4": "25840395adec156eb96ab254bb37763c",
"assets/assets/videos/Lesson45a.mp4": "d8db8b032fa5dc9d38b6756f6e6f7bb8",
"assets/assets/videos/Lesson39b.mp4": "e34ef3468fbecc8ff9c812876689255b",
"assets/assets/videos/Lesson6a.mp4": "efb2e4c243491fcbde41cf27cb2d86f6",
"assets/assets/videos/Lesson18a.mp4": "e870421c265848b8495aa393b40add75",
"assets/assets/videos/Lesson43a.mp4": "6ac0f47302bb187ca47d8edab311163b",
"assets/assets/videos/Lesson24b.mp4": "ac8e546fb7ab8b8700d269a01f1150eb",
"assets/assets/videos/Lesson36a.mp4": "7161b7ecd9cd6ed94cac3525b041debb",
"assets/assets/videos/Lesson1a.mp4": "48f1a24a79be545efd370400958a8174",
"assets/assets/videos/Lesson15a.mp4": "02346aecc950e6e6c9e3377a48f3b7c6",
"assets/assets/videos/Lesson27b.mp4": "a1bd3d9769a1a2eac731e294f9236aa0",
"assets/assets/videos/Lesson14a.mp4": "2d7771251f4582bd39d74f01dd40c11d",
"assets/assets/videos/Lesson50b.mp4": "0fecb5d5be7065ca9959d2dd50a88168",
"assets/assets/videos/Lesson28a.mp4": "fc6565ad3c314158e814e2331564cb3c",
"assets/assets/videos/Lesson22a.mp4": "5ef0ecc097e7f025d599156bdff817cd",
"assets/assets/videos/Lesson46a.mp4": "338f2fcf07c022ff37cfbcd373d16648",
"assets/assets/videos/Lesson23a.mp4": "537e44a65eefa24b0286879c2f86d2c3",
"assets/assets/videos/Lesson49a.mp4": "4e25835e280aaa7a69b65e30db88cd06",
"assets/assets/videos/Lesson14b.mp4": "e63e17d980f13141ff332a57ebdd73fd",
"assets/assets/videos/Lesson20a.mp4": "6d53c61ce969be2482cfd588ccd34ee2",
"assets/assets/videos/Lesson11b.mp4": "3df8bc211dff1b9e3103fc57b93421a0",
"assets/assets/videos/Lesson44b.mp4": "ec893c36e3de6a4b1321e0ebc46ec8bf",
"assets/assets/videos/Lesson13b.mp4": "d71c7414a8529a67a4fd097403698622",
"assets/assets/videos/Lesson48a.mp4": "274f97c0652b46900a657bbe590e12a5",
"assets/assets/videos/Lesson7a.mp4": "29541c1d10ac09247502daafc6b60555",
"assets/assets/videos/Lesson4a.mp4": "e2ce15ecab9248185021ae8759bad2c6",
"assets/assets/videos/Lesson47a.mp4": "c5bc6ebf4b374199885348b8fea623d1",
"assets/assets/videos/Lesson40a.mp4": "706183e679b39be5eee5e5886caa5117",
"assets/assets/videos/Lesson25a.mp4": "c11fc3a7558759862b22a427d53f5252",
"assets/assets/videos/Lesson17b.mp4": "7461c15ed5c3e07e95f49e27d71d4789",
"assets/assets/videos/Lesson35b.mp4": "12c5d1361390432a9bb6eeea5d989ef2",
"assets/assets/videos/Lesson5a.mp4": "95c6560478558e66f3dbee44e91dfae1",
"assets/assets/videos/Lesson15b.mp4": "f9443fa3dd3a479a1da5d2c3a038fc5f",
"assets/assets/videos/Lesson32b.mp4": "f8291fe723a2b6c7e95ef8dfeaa4642b",
"assets/assets/videos/Lesson6b.mp4": "48a5d08272a498bdfbb2fcda6c288a1b",
"assets/assets/videos/Lesson2b.mp4": "3393bd3f0c72afd1528319a0364f5050",
"assets/assets/videos/Lesson22b.mp4": "a3f48f993b68afe0be9f5137eed46396",
"assets/assets/videos/Lesson9b.mp4": "f3b6a4550fa1d9da8a1c3d28acc02568",
"assets/assets/videos/Lesson26b.mp4": "d0a4da5eb6589caa93ddfb8d14a397f6",
"assets/assets/videos/Lesson26a.mp4": "2eb27c162ab6f3d22da1a84ddc0a8d2f",
"assets/assets/videos/Lesson42b.mp4": "8ae8d7306ca3b1b32460465eb97c2ed9",
"assets/assets/videos/Lesson49b.mp4": "4760c4c9b6a05452a778a358c7cf4c2c",
"assets/assets/videos/Lesson9a.mp4": "26ee730e41383c30a97332110d7daa34",
"assets/assets/videos/Lesson28b.mp4": "d89e1cb3fec22c4b09a18f4212ccde5f",
"assets/assets/videos/Lesson44a.mp4": "d96206cdc476ce448d1af715884ea5be",
"assets/assets/videos/Lesson34a.mp4": "50fb20600210cf01b2bdc7dba9c8396e",
"assets/assets/videos/Lesson27a.mp4": "5a79fd04259a4e3c6f42091b75687b6e",
"assets/assets/videos/Lesson12b.mp4": "1a156a4affe5d0f751c41d2eb51e9a12",
"assets/assets/videos/Lesson11a.mp4": "cc7b7c4ab02caae961d5e56161311374",
"assets/assets/videos/Lesson40b.mp4": "226c29cc8af06368e04017a27953440b",
"assets/assets/videos/Introduction.mp4": "a4bc7d18fa1a422397dcc0205d9eb8ba",
"assets/assets/videos/Lesson38b.mp4": "ef0651a2c2e9f20cea07b6ea2ad5dd20",
"assets/assets/videos/Lesson37a.mp4": "565fb58e0655613c327a9bdb68f51499",
"assets/assets/videos/Lesson3a.mp4": "1cf55e601fef514035a587a11d760080",
"assets/assets/videos/Lesson37b.mp4": "36e59e567fb8b75477f18cb9173f9ab4",
"assets/assets/videos/Lesson17a.mp4": "258f57f0bb1476655d23687c861612c2",
"assets/assets/videos/Lesson8a.mp4": "a16752f307c047ae12d5138e6588553f",
"assets/assets/videos/Lesson41a.mp4": "509941048e67904353a73a6df3bbb7ae",
"assets/assets/videos/Lesson50a.mp4": "29f40efbd2ecd78b3aec5b6a03072139",
"assets/assets/videos/Lesson47b.mp4": "d2b72a5f526ba69b38e056c5fc2bc490",
"assets/assets/videos/Lesson34b.mp4": "9548d4e35f58f9bac9be62520251d926",
"assets/assets/videos/Lesson31b.mp4": "ba5fda9b240ac0bd5b406fee14ea6bac",
"assets/assets/videos/Lesson45b.mp4": "acff1a3e9c25bc03f15c11d46a2312dc",
"assets/assets/videos/Lesson38a.mp4": "9f0bd23226636ee9e89d0bb37d06db9b",
"assets/assets/videos/Lesson10b.mp4": "4007717e0ee93acff27ca325f27db91a",
"assets/assets/videos/Lesson3b.mp4": "1683104211c7b77fcbf955ce307743fc",
"assets/assets/videos/Lesson13a.mp4": "e81f378756b688ed9b8f3826f56da7c5",
"assets/assets/videos/Lesson42a.mp4": "6619a05f62225334a831cc003d1cd8f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
