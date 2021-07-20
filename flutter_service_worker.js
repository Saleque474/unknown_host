'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/index": "b935c3b95956b268cbbe062c0a5bb641",
".git/COMMIT_EDITMSG": "32a3a122bbfda2dfe87773c862ad1a1a",
".git/refs/remotes/origin/main": "8329f8ded2969c3659bf25925b812b06",
".git/refs/heads/main": "8329f8ded2969c3659bf25925b812b06",
".git/objects/46/dd776f2fd1a5b80435cd3461e69b513d84557a": "f32fe30f8d75350196a64c29375a7ae9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/56/9fed7d734b8d0263df199771961f46c5530cbb": "f4a820632c37e12fca9a1bef55d99526",
".git/objects/ff/6cd4c328d4882c470db1036aa766d252a765a7": "7014d547b362bbb9653df34e0d10c55f",
".git/objects/ff/ea50622e518b6e206ed8694380b755f5daee9a": "097c0324c9012ba513600fb9e1f92085",
".git/objects/7c/b4778afdcf4fc22843700083e6ad77dc339d03": "689843610d6bf9066434eb008e00c112",
".git/objects/2f/37d468a6082540789a7f760fa3eeb027e71f16": "959eda45f91739683465b15d2ab475a1",
".git/objects/34/9fd97a3e566e2b683b4b7592b0eb16aef96823": "e9cfaf9ab905b29361808ba095124d1e",
".git/objects/33/8530eca96fe6b3245b9a69567ea234ce64d988": "59f9faec0127e9a07188478177fff718",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/9a/c25eb400929f13e2ca2cc45e4af3ca51e7be03": "f361b64e22f0b75ea89dffe975df452b",
".git/objects/9f/a2fbe87ffb640cfe3353cf503294591cccb877": "901d897e6bb2ab7c958d2431916a4ad9",
".git/objects/fa/4e58252444cc7cb4e1837405b758b76b61c05f": "e404a3bbf36e4b7bbf1a1ec2045eca6e",
".git/objects/4c/5866ad8b836159d189bf86a0086c349971667c": "0eeb65bf198c5ce4c242cfd3d70bc423",
".git/objects/c1/2dbb33d0428c3f892044ce3ba2e2aadf8d4414": "301f84d8936e5676ca2f7eb6970064fc",
".git/objects/c1/1e24ef3a05d7a13fab97a05d388282fcab8f44": "4240992f5408a09f08473a1ec288e203",
".git/objects/d5/e2cc365a763be91d22e28cde3623757a7d90df": "7746405f4f884b2e49220ec3f30e39fb",
".git/objects/d5/d2ee2836eac457a197254b250035e455645295": "328379b94cdd319c8db9819fdb2bf21a",
".git/objects/90/4414c69bab0a6213f4d9a973593289489ac934": "1032dc1870eff61a158594c79cceb5ea",
".git/objects/90/ecd0875417650edde141b40c37fac68273a2a7": "455f3c0dfd7f44134b69bd34b57a30c7",
".git/objects/63/776135c9aa4215241dcde9862294a789e2b86f": "533c030320cffb08a3c952310cf6faaf",
".git/objects/07/96b339e3c8ac37e7295c0f9eb901d04aaf27c7": "383b6884dfa81fc22badbe3aeb0740f9",
".git/objects/ea/e87ca0f91fcf823b46e4b2369bbee558384d8a": "91c874563977ae806267334e8af9b883",
".git/objects/cf/30f837691fdbfa71bfd2ea25d2b65da58d654d": "95136167560254baac82e0af579be994",
".git/objects/a9/5071aabb1f11f9ca61bbfad1b4945c5d4313ed": "293eaddee5d9e3dc5eeae865105d8256",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3d/680f3b266bce38a2530e8c2ef776e108fe0649": "f808493a6467e42aa307d267529a3e14",
".git/objects/3d/8be580497b2c3246a285a1d80e9114252b4370": "136b79793e45d159a7b2a33b10286314",
".git/objects/ab/e31aab1d2969aab70ccfc525a265718736dc7a": "9cd370ef63ce8b132f77870b9eab2f74",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/d442fc0bb0a2d9935c564448cea62e6e0485ae": "68170d66e5ba27576c3de5c827866997",
".git/objects/b2/a9db6c14ff899c32fa9aca96695fbc0b6f7660": "c4d1fb8a72d1f4988b386c8513cbd178",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/21/bb48c8ff7c92cb1ca4fc6f7dd0a29f0a4a4439": "1d1d359a11ff6e9caefdf8ffcc930998",
".git/objects/30/f3512e00c52d8f321e91dc7496333cc91a91b0": "9bd464955937e5cbd781fd0078fca82f",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/a0/0d489c9bdf6026924ceca9181f5b5079133f8b": "9cb91f0eb792e32ca0759dc2000d3218",
".git/objects/7f/5818ed554ec965585be9a17c827f00ca90fd0d": "4f05e22c75ece2585293870a7f54476c",
".git/objects/7f/37654fb765eac280ff5abe83d2c302caca841d": "36fb17e9aba296f76dac2ba513c7c307",
".git/objects/8c/faacfdd467410b4bdcdcbbac70252570cc1c9a": "7df3b56cd1c3436fef9f9f61f86ccb11",
".git/objects/8c/d69701a7454f5a7f7f34b6473efa3e57005ebf": "4fc61ae37b4fce860458edd762074068",
".git/objects/4a/582cbc9d3ae2a5120b6a3ee43f174773eb8a04": "27b0cec8448652ea603c12add177a4e9",
".git/objects/8b/7900114d91cfffc3c780abb9d99be5bb959edb": "956d2cee170b1500922108c3efb54f5b",
".git/objects/8b/94a0589cce35d1892fab5f618d1e31396cbce6": "bfa66fa64733b0b0cdc61a017a47af1e",
".git/objects/80/88ef62eaa023f163d0782eb4cd1b3db80897a3": "8be38a4304a31e19e04122c73965d6bd",
".git/objects/2a/8b54d39e8a329c8b7cb3971770a5fa73427aa9": "0b2936a888b6398f554b5ed6f70f5ce9",
".git/objects/84/d43c293420e3212530d9abba8bbbf27ec374a7": "4cc385b7a4c48bccaf848dc7be07b2a5",
".git/objects/43/75142558c0ef58fa237a04713727738f64c833": "c9f53396f7b21da8ece55714b0c1e29d",
".git/objects/b1/57b8199fd80bfd853b62219144aa99ced683e4": "99ebd11c31820e64ba2ca974d3d219be",
".git/objects/d3/6cec72434fc6064be58c04d9862fe6e31f1b70": "ee23aaa192bc611da97c3c7160e12f30",
".git/objects/77/1e9e1729430d5879d059f6c7aec8c479f806a4": "54e6d470f3c40730c1a457dbc69f3d12",
".git/objects/26/dfc8b22131eb52704d3114c77a8016c26d31bb": "c073523812bc7f5d576c7d554e5e96c6",
".git/objects/26/2f1df13d97160b39e9c8e361d27d86fcff9be8": "eaae11fd3b8dd7699a02d0406a5f96fd",
".git/objects/ca/ab37f0ad4ca89855f6f1952ec9acab4f630856": "7f09fd272e1a91e3f7cc3c193cc86f70",
".git/objects/2e/252e17cf53653e7550b064b3ce3e14a3ef8576": "cf22b0cf4f5ee13d9eb300989205a5f3",
".git/objects/40/a005db0adfb4552a5d82384985550e79598c4e": "836fe8711785729304b7c95f772918d9",
".git/objects/ee/395d36c17a53be9fba6e4fa8c04353d1b880f4": "a1c9b43cf277bbe8cd55b06e141dd241",
".git/objects/e9/88590cfc978c4922e9f7f10c5162dcec5f7ebf": "6955ed4e7c08777596fe1daee91ec23a",
".git/objects/0e/12ebcffd7d46ab56d42288e17aa64cf0723b92": "a9168cfa29bb01666e394d570b25ded6",
".git/objects/53/aebf42b7d79289591a7fb30c040cf8033d5a14": "6ff861a5f56c00cec03d7f3eb40f5934",
".git/objects/6a/0de7920b1201a42d526e572573ea5d67b33087": "54b6d2bff387206de48498d2a982a562",
".git/objects/23/70fd45284eaf4235cd0dad6773253e70be8e31": "f2dd8da049cc1965ef69a7c834113e96",
".git/objects/23/b8d3a8e02f75053f4e5d5ec4381bf9a9b3c965": "dcaade8dd28cb36cba71b823ffd54b64",
".git/objects/c8/0a3589454db4baa2a4b5dc689973718dee7a9e": "150c4cc72c8dd1faeb74e7d25350e09f",
".git/objects/bd/5ee4cd3adf7ff6b64bea3a5f1bdfabbdb619e2": "e051f4d0c5d993be23b536ca8a9ff6ed",
".git/objects/bd/b8920efe719c0131c232061c6361028b3b4f77": "134d36d2598c09cdeccb97175ae78193",
".git/objects/c6/968a0c566413819ce0f8f3b22fac5e414e89a7": "7e768c298b3ce0727d777a72ecb7d447",
".git/objects/f4/378d0835e4411306978276f1d786af3d6e88d7": "58f3c232b79746e4d8a951bb2bc3dfa6",
".git/objects/96/3524e0d971328a1ce3743838bcc8613b2b0719": "a1083a90311af1c2ce70398aa48e0507",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f9cef3febdc7ff76264b4e5da578975798cb7c": "f28ad5b168d9abf8cc353f06a349387b",
".git/objects/0b/2d603993501736899198b0bb34247b72c03cce": "418bb7500e3454b6f0e6180d1bac2622",
".git/objects/0b/b717945fccde48799915c2ad4b8c19d0f4180d": "d7651a81df5dbe6fa4a562193afe554e",
".git/objects/be/3cf3c87dc81d6208d7dac64e7b34e7be870860": "dcaaa2509fe913f3ee72d19d2a2ede36",
".git/objects/cc/f7d701214afffb46e5431dcc3395399c765002": "e211b3125560a75c877e89acf8bec79d",
".git/objects/df/0151c39b916b8335ce1627d64f99482b8b6c90": "9bb5066168e86b0e0199d3a3d1ab6968",
".git/objects/df/e191e2a62ec43fe1f89fbd6dc854f447cc67b6": "67e2d10598d180f3f97f97d2f026fb7b",
".git/objects/3f/c565b9bd26e07f7a75f288203b3f6abe1a9334": "69180a9035f27ef129ad99a75edc2905",
".git/objects/48/751118beda476ac67812a60e3ade91531b0ac2": "0aac2688b339345f441ecbf78c1c05c2",
".git/objects/1b/8cfa6338d61401d856fc62084e477b54454170": "ff2768b0128fe854478b1fca0872e94e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c4/a958c5c41c78a88d9930642354baae70753c81": "ae91651f6cda677b3df790ffd18bd966",
".git/objects/c4/a660da08a844b739c5dfa51e9c31a08330201f": "83db27565829ae5a56722667cb87238d",
".git/objects/14/32f911c535cb09999e72da7188a12c07f481bb": "810865e3137dbabbfef7a4e82f4a5502",
".git/objects/0d/bd1552e72f034ee7e17a1db1b3099b8fc70a89": "cdb0d168131e5dbc9a47e85c328d6ffb",
".git/objects/0d/9f8768f99b67c5702cff3d51b2f505da26467d": "46385ed27937da42ceefcb2af7136f0f",
".git/objects/02/b8e7d07839949c1cf6fe71b21ec1e80e27ad40": "90fb7cbe0bcd226b6aec0f9a11f76581",
".git/objects/02/ee620e823c17640f030706b7531f458a46a154": "dce8f6f850019d4458ce22eccea22457",
".git/objects/67/4e03993255c8f8f85d1745d3935ac85ceb8086": "bc34542903d9e9e940908c40f0c7f13e",
".git/objects/f2/b352b7462469a01a1e9f26dfabd4ae9a9ca344": "c83620c77de37c51f4390468a62b113c",
".git/objects/ad/dc5d97efb06b103c9df89fc396b20a84ba5e7a": "6d98c991cb587c5465cd5093b493b04e",
".git/objects/d7/7fd078ec473ac664902c4fd78a5763213192ee": "5963e2a5e648626263c9d99f984cb1ac",
".git/objects/d7/082a9bf1cc47a65c898242dc54f243c641f13b": "4d383296687507f76e389d2ee249374e",
".git/objects/d7/d5766e22f0f8713a0b480c304aa89a19117c90": "6e5c39afe8f26a9fe9c7dd624cd2920a",
".git/objects/a4/aef8b4fa13dc92dc44d529e9b912eb96e52e6d": "c9f4298c48c9936bc5facf90cdda7808",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/70d89d2571d711f8432ff7da866945f3c37c39": "efa104caea6e8a4c049dc020c3791fc8",
".git/objects/d8/90d23b164b27e2058c07b3d643d046335ad340": "b60397e1b907f4861535671db7442963",
".git/objects/72/d6e37a39e3a46eb6f84dea359bc2f4ec16e009": "dcbaf9350652a2de40849fe85ff92d72",
".git/objects/3c/75eff4e17e9ddee7b16f9c8510a8a88baf2c5a": "3ece705355901bc9e598e80f311814a6",
".git/objects/15/9fd639baf26595e212ebc869056e248306ad2c": "5b2915185ca028eee43072c87f7355c8",
".git/objects/ae/3abb9b0b6ccf295d60a01e3ff6fa69ba341b38": "2ea84c7f2b79fbaa7187da1c9e7dd7d5",
".git/objects/ae/75477b0e572c09517ac38e163210d533976663": "bf6e9bae2b0a5df8f83c7e4b4b5a29a4",
".git/objects/13/ac047ebe834e9327cd45ab6ad699ab7b1a6c5d": "cbd63b4736d12658033624737279995d",
".git/objects/b0/2c9785b89a1c52b32bc458b433b6b23bef0889": "8eec097c1960279f9d318ca82ea67ec5",
".git/objects/c0/0edf99d3204f2f657b9e703eb2a22f48cdb2fa": "6413d9fd24f8fb35f79051b0012d3686",
".git/objects/d6/9f9a4f256b5b1dcc7ed6fb6d2d0641f0019cf0": "f9a5f6a06bd527acc4d8fbbce28294c5",
".git/objects/f7/bae9d0ddd85de3059a6d68dd21451197c59b79": "30b0880f50f7b55662d94ae961b5bbfd",
".git/objects/12/58599daf605e513817b0dce10fd9cb9d871211": "85adbdd12b6bbe7d3cd6a6c80c5beaa0",
".git/objects/12/3e261be6bcb885e174156de87589402b9dc135": "4c449745d8873c01070ee0298547a012",
".git/objects/78/784f8e94a4d55b5599a966984b784817fdc129": "7547aa75bd0ccfbaf9674956c0c79fbf",
".git/objects/6d/f7e92128bd2aeeed6cd3eabcccc1d1c4d90d8d": "d3132e98d7c8b3053d47fd288927810a",
".git/objects/55/e6f3f601200b233cbb00f0edb358e01cf03270": "69dacc751484db759d1520c1c80b487f",
".git/objects/55/232ec9e31a83c379469d13628b81bccc338d86": "df07b2a99527286710257b91d2d3b9b5",
".git/objects/00/c8dac3d10550d6770442ac91eda9bb2cd16434": "e4789fd91a2a295879266621e749852a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/93/bcedecc2a979b16af6ffbac57c55b405d1f4f9": "0f5c4c8407e18968944e4ddb6b657a46",
".git/objects/1c/925e1cdcb9a0b829bbde19c6738ff15c790963": "23c53ce0d2a1e53cb104f574589eee5c",
".git/objects/1c/97f4174e1ebe733354d76a8d3e8ec8eec4ddf6": "5f245a63609611eaf661177e1f65f9b6",
".git/objects/1c/40729f488cfefb47c01b49a1f8d74eebd52ade": "85f99e0a042b1318f37e4e63de9b8c38",
".git/objects/74/76c2175121071685b45d5251c0faf8029f4e81": "63c60d54e96bf70ba4bf810e3268f10e",
".git/objects/de/80bf641e6fd45011df6f61c723ead13ca85193": "f1c0bfe0f3957265591e5612571b66b0",
".git/objects/de/03349669a0f8b3cc7baf947805babf349539c2": "ea659a14774d3109c54832f048bad357",
".git/objects/9b/f45b18a18b93fe8d62caad9c76fb7b6ab27e12": "99dd59cf3b262b14da8cb46827481e80",
".git/objects/f9/8b44c6c0b5d3d905942d0b678cf60f578a0e75": "1427c000cd3a63943867581deffb630e",
".git/objects/a7/ed0ccef5a8304b64bc9d68b000891a4d1214f1": "72411836f1d71d9ce92844aa9cc3a49e",
".git/objects/7a/e335a718183ce6b191d043e77fdaf5a4647683": "492867f7df91b413074680b863beaa06",
".git/objects/3a/e385555a8aa71f7da3c9700db401ddff272520": "4adf1691a274c9933d5ccf475de2dde8",
".git/objects/97/13fd31eb4fb8ecb19e3696d0182dd3f24fef49": "3790cf4cdf3aa5985c64c72a89334ccd",
".git/objects/97/63c5ff9aa183abf18a7bbf85ffec58bdacdafb": "df3fcc7d2bb86ca8e39ed837bfc2cfef",
".git/objects/ce/c86511998356ba8740984c1ba3e2e2f8cbf55c": "cfad42cd51a8a1a8b08a73100032549f",
".git/objects/62/95865d0bc2e5851835080590491c704188378c": "b303f2a5d6e3545b37caad03126bf520",
".git/objects/ed/52c996d7eaa3359dba864dbe5fae2006886634": "1ed4919cf2bc560f1046bb53a7e3c7ed",
".git/objects/6f/77c856c813b41a0f7e5e4a15d4ef5704c95af1": "2c75a1d253ac7b7d24fbc414e208c96e",
".git/objects/fc/9c81dcfe5d0565513a7942667bb9826318a238": "d7b6fbf0df3eebc7f4eaa731418f9571",
".git/objects/17/e54b5b12312fab2d280e7d496b8cc173b5176a": "2206ff96d93d556bc73698db34c3e520",
".git/objects/a5/27e7c7d287bfa23f7a07900c5d4c2083b67c9e": "f2aa82e5c2a7f70a6b633a98f234abc1",
".git/logs/refs/remotes/origin/main": "d9368622568dc87ecdeac5fb138b31c3",
".git/logs/refs/heads/main": "02031b199fbdc7f79c6af082d4100df0",
".git/logs/HEAD": "9663e4369dd34e2b9a06c92e061b1288",
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
"main.dart.js": "10c9c2bfc8d63f42a89da8badef127d4",
"version.json": "22d9f5d4a412af3adcaccf61e8bc7a58",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "bf785c2b7382e5eaa69d7e325b6f6772",
"index.html": "24b6a1868377961d8deef3cbed226a40",
"/": "24b6a1868377961d8deef3cbed226a40",
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
