
var liste = [];
// {latLng: [52.50, 13.39], name: 'Berlin'}

var listeCoord = [
    {
        "latLng": [
            47.37424,
            -1.6461560999999847
        ],
        "name": "1DAY EXPRESS"
    },
    {
        "latLng": [
            47.823871999999,
            -0.708073000000013
        ],
        "name": "2M AND CO"
    },
    {
        "latLng": [
            46.84848,
            -1.180129099999931
        ],
        "name": "4 M INDUSTRIES"
    },
    {
        "latLng": [
            48.42237,
            -0.3357949999999619
        ],
        "name": "53 COULEURS BOIS"
    },
    {
        "latLng": [
            47.298961299999,
            -1.7123225000000275
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            46.68474,
            -1.6089449999999488
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.24844,
            -1.5238594999999577
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.50639,
            0.11131380000006175
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            46.70297,
            -1.7353815000000168
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            46.5643453,
            -1.7710954000000356
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.29678,
            -2.181855300000052
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            46.722669499999,
            -1.549654099999998
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.2819,
            -1.3263534000000163
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.15008,
            -1.541678999999931
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            47.45747,
            -0.2840896000000157
        ],
        "name": "ADRION SAS"
    },
    {
        "latLng": [
            46.9482,
            -0.9829393999999638
        ],
        "name": "AG WOODSTOCK"
    },
    {
        "latLng": [
            46.69898,
            -1.051894500000003
        ],
        "name": "AIME BONNET ET ASSOCIES"
    },
    {
        "latLng": [
            46.738099299999,
            -1.4262883999999758
        ],
        "name": "AKENA VÃ©randas"
    },
    {
        "latLng": [
            46.52477,
            -1.7752795000000106
        ],
        "name": "ALEXANDRE DEPANNAGE"
    },
    {
        "latLng": [
            48.225257199999,
            0.13062330000002476
        ],
        "name": "ALEXANDRE PROVOST COIFFURE"
    },
    {
        "latLng": [
            47.1801,
            -0.16637500000001637
        ],
        "name": "ALIENOR PISCINES PAYSAGE"
    },
    {
        "latLng": [
            47.99655,
            0.19175020000000131
        ],
        "name": "ALLAIRE YANN et TECHNICHAUF"
    },
    {
        "latLng": [
            47.47087,
            -0.5514628999999331
        ],
        "name": "ALLARD SARL"
    },
    {
        "latLng": [
            46.9374744,
            -1.4041005000000268
        ],
        "name": "ALLIANCE AUTOMOBILES"
    },
    {
        "latLng": [
            47.2516,
            -0.08676620000005641
        ],
        "name": "AMD CHAUFFAGE"
    },
    {
        "latLng": [
            47.02556,
            -0.9415762999999515
        ],
        "name": "AMDB CHIRON POHARDY MENUISERIES"
    },
    {
        "latLng": [
            46.4172,
            -1.5958229000000301
        ],
        "name": "AMELINEAU OLIVIER"
    },
    {
        "latLng": [
            46.88485,
            -1.3189654999999902
        ],
        "name": "AMIAUD JEAN LOUIS"
    },
    {
        "latLng": [
            47.28131,
            -1.5521889999999985
        ],
        "name": "ANDRE BENETEAU"
    },
    {
        "latLng": [
            47.64205,
            -2.7562571999999363
        ],
        "name": "ANSAMBLE"
    },
    {
        "latLng": [
            46.9897,
            -0.9392914999999675
        ],
        "name": "AOB"
    },
    {
        "latLng": [
            47.26638,
            -1.44113219999997
        ],
        "name": "AQUASENSIA"
    },
    {
        "latLng": [
            47.03743,
            -0.9161695999999893
        ],
        "name": "AR CARTON"
    },
    {
        "latLng": [
            48.27053,
            0.4536412999999584
        ],
        "name": "ARCONIC FIXATIONS SIMMONDS SAS"
    },
    {
        "latLng": [
            46.7816593,
            -1.4239516000000094
        ],
        "name": "ARJOWIGGINS PAPIERS COUCHES"
    },
    {
        "latLng": [
            47.82719,
            0.7440288999999893
        ],
        "name": "ARJOWIGGINS PAPIERS COUCHES"
    },
    {
        "latLng": [
            47.1002,
            -1.597584299999994
        ],
        "name": "ARMOR SAS"
    },
    {
        "latLng": [
            47.1002,
            -1.597584299999994
        ],
        "name": "ARMOR SAS"
    },
    {
        "latLng": [
            47.68991,
            0.4260520999999926
        ],
        "name": "ARO WELDING TECHNOLOGIES SAS"
    },
    {
        "latLng": [
            47.36541,
            -2.4941374999999653
        ],
        "name": "Art Sol Atlantic EIRL"
    },
    {
        "latLng": [
            46.88947,
            -2.0980389999999716
        ],
        "name": "ARTUS ALAIN"
    },
    {
        "latLng": [
            46.8768,
            -1.0180933000000323
        ],
        "name": "Association OPA"
    },
    {
        "latLng": [
            47.20996,
            0.18201320000002852
        ],
        "name": "Association PEREN"
    },
    {
        "latLng": [
            46.95837,
            -1.3048648000000185
        ],
        "name": "ATELIER BOBINAGE SORIN (ABS)"
    },
    {
        "latLng": [
            46.59478,
            -1.4413809999999785
        ],
        "name": "ATELIER DE L'EBENE"
    },
    {
        "latLng": [
            47.39546,
            -1.480327799999941
        ],
        "name": "atelier de mazerolles"
    },
    {
        "latLng": [
            46.99135,
            -0.9474797999999964
        ],
        "name": "ATELIER JAROUSSEAU"
    },
    {
        "latLng": [
            47.797331,
            -1.8932369999999992
        ],
        "name": "ATELIER PEINTURE DECO"
    },
    {
        "latLng": [
            46.70594,
            -1.4314600000000155
        ],
        "name": "ATLANTIC JARDIN CONCEPT"
    },
    {
        "latLng": [
            47.1525,
            -1.9846981000000596
        ],
        "name": "ATLANTIQUE PRODUCTIONS"
    },
    {
        "latLng": [
            47.65918,
            -1.6667970999999397
        ],
        "name": "Atlantique RÃ©partition"
    },
    {
        "latLng": [
            46.33311,
            -1.323027799999977
        ],
        "name": "ATLANTIS'DEPANNAGE"
    },
    {
        "latLng": [
            47.88787,
            -0.8477854999999863
        ],
        "name": "ATOUT CARREAUX"
    },
    {
        "latLng": [
            47.64393,
            0.1569105999999465
        ],
        "name": "AU BISTROT RONSARD"
    },
    {
        "latLng": [
            47.91948,
            -0.7996980000000349
        ],
        "name": "AU CHARME DU BOIS"
    },
    {
        "latLng": [
            47.83124,
            -0.6922586000000592
        ],
        "name": "Au Cours des Halles / SARL RABOU"
    },
    {
        "latLng": [
            46.84611,
            -1.4888502999999673
        ],
        "name": "Auberge du lac"
    },
    {
        "latLng": [
            47.979,
            0.16288269999995464
        ],
        "name": "AUBERGE DU PONT ROUGE"
    },
    {
        "latLng": [
            47.39294,
            -1.4551645000000235
        ],
        "name": "AUBERT"
    },
    {
        "latLng": [
            47.10646,
            -1.4445038000000068
        ],
        "name": "AUBRY ATLANTIQUE"
    },
    {
        "latLng": [
            47.46956,
            -0.5540269000000535
        ],
        "name": "AUDECA"
    },
    {
        "latLng": [
            46.5504,
            -1.1650950000000648
        ],
        "name": "AUGER CEDRIC"
    },
    {
        "latLng": [
            47.22656,
            -1.6458431999999448
        ],
        "name": "AUTO DESIGN 44"
    },
    {
        "latLng": [
            46.69552,
            -1.9393757999999934
        ],
        "name": "AUX GOURMANDISES DE LA VIE"
    },
    {
        "latLng": [
            46.39818,
            -1.3022593000000597
        ],
        "name": "Aux Saveurs du Terroir"
    },
    {
        "latLng": [
            47.30532,
            -1.7573743000000377
        ],
        "name": "AVM"
    },
    {
        "latLng": [
            47.83956,
            -1.4016410000000405
        ],
        "name": "AVRILLAUD"
    },
    {
        "latLng": [
            48.22754,
            0.6765533000000232
        ],
        "name": "AVZ COIFFURE"
    },
    {
        "latLng": [
            47.279,
            -1.5879817000000003
        ],
        "name": "AXIMA REFRIGERATION FRANCE"
    },
    {
        "latLng": [
            47.05285,
            -1.6297862000000123
        ],
        "name": "AYALA CONCEPT ET RÃALSATION"
    },
    {
        "latLng": [
            46.8065,
            -1.9389647000000423
        ],
        "name": "BABU Guy"
    },
    {
        "latLng": [
            47.212276499999,
            -1.5450554000000238
        ],
        "name": "BANQUE CIC OUEST"
    },
    {
        "latLng": [
            46.6974,
            -1.7627109999999675
        ],
        "name": "BARBEAU"
    },
    {
        "latLng": [
            47.15059,
            -1.344701299999997
        ],
        "name": "BATI EXTENS"
    },
    {
        "latLng": [
            46.6241,
            -1.1124783000000207
        ],
        "name": "BATI TECK"
    },
    {
        "latLng": [
            46.4037,
            -1.3074110000000019
        ],
        "name": "BATIMENT ROLAND GORGE"
    },
    {
        "latLng": [
            46.86872,
            -0.7951722999999902
        ],
        "name": "BATISEVRE"
    },
    {
        "latLng": [
            46.66168,
            -1.4421718999999484
        ],
        "name": "BAUDRY AUTOMOBILES"
    },
    {
        "latLng": [
            48.09793,
            -0.3520343000000139
        ],
        "name": "BEAUSEJOUR"
    },
    {
        "latLng": [
            48.0764,
            0.29782350000004953
        ],
        "name": "BEAUTE LOOK COIFFURE"
    },
    {
        "latLng": [
            47.21426,
            -1.5572065000000066
        ],
        "name": "Beauty Success"
    },
    {
        "latLng": [
            46.6416,
            -0.75028599999996
        ],
        "name": "BELAUD GILDAS"
    },
    {
        "latLng": [
            47.26494,
            -1.0253743000000668
        ],
        "name": "BELL'S DIMINU'TIFS"
    },
    {
        "latLng": [
            47.4719,
            -0.3304533000000447
        ],
        "name": "BENJAMIN"
    },
    {
        "latLng": [
            46.9165,
            -1.2420549999999366
        ],
        "name": "BENOIT BRETAUDEAU"
    },
    {
        "latLng": [
            47.05031,
            -1.266913299999942
        ],
        "name": "BERNARD PIVETEAU"
    },
    {
        "latLng": [
            46.7039,
            -1.3349829999999656
        ],
        "name": "BERNARD TEXIER"
    },
    {
        "latLng": [
            46.9075,
            -1.083511000000044
        ],
        "name": "BESNARD PATRICE"
    },
    {
        "latLng": [
            47.07735,
            -0.841261099999997
        ],
        "name": "BESSON CHAUSSURES"
    },
    {
        "latLng": [
            46.6439759,
            -0.7484710999999606
        ],
        "name": "BETARD CLAUDE"
    },
    {
        "latLng": [
            46.86929,
            -1.3684025999999676
        ],
        "name": "BGC CONSTRUCTION"
    },
    {
        "latLng": [
            47.52698,
            -1.8859818999999334
        ],
        "name": "BIDAUD CHARPENTE MENUISERIE"
    },
    {
        "latLng": [
            47.23164,
            -1.6381381999999576
        ],
        "name": "bieres d'ailleurs"
    },
    {
        "latLng": [
            47.398790899999,
            -0.529466100000036
        ],
        "name": "bijouterie julien d'Orcel"
    },
    {
        "latLng": [
            46.6702,
            -1.4287288000000444
        ],
        "name": "BIJOUTERIE PORTEJOIE"
    },
    {
        "latLng": [
            46.69424,
            -0.7041855999999598
        ],
        "name": "BILHEU SARL"
    },
    {
        "latLng": [
            46.92495,
            -0.9722894000000224
        ],
        "name": "BILLAUD LOIC"
    },
    {
        "latLng": [
            46.85423,
            -1.0420133999999734
        ],
        "name": "BIOGASYL"
    },
    {
        "latLng": [
            47.21305,
            -1.560162900000023
        ],
        "name": "BIVILLE"
    },
    {
        "latLng": [
            47.46994,
            -0.5494971000000533
        ],
        "name": "BLANVILLAIN OPTIQUE"
    },
    {
        "latLng": [
            48.0625,
            0.15790960000003906
        ],
        "name": "BLISS"
    },
    {
        "latLng": [
            47.4,
            -1.4450917000000345
        ],
        "name": "BM SAINT LAURENT"
    },
    {
        "latLng": [
            46.556,
            -1.7193528000000242
        ],
        "name": "BODARD CONSTRUCTIONS"
    },
    {
        "latLng": [
            46.8351,
            -1.2816749999999502
        ],
        "name": "BONNIN CARRELAGES"
    },
    {
        "latLng": [
            46.8174,
            -1.7692999999999302
        ],
        "name": "BONNIN DUGUE"
    },
    {
        "latLng": [
            47.06988,
            -0.8508996000000479
        ],
        "name": "BORLIS SOLUTIONS"
    },
    {
        "latLng": [
            46.7314,
            -0.5784012000000303
        ],
        "name": "BOSSARD"
    },
    {
        "latLng": [
            48.06084,
            0.49443700000006174
        ],
        "name": "BOUCHERIE CHARCUTERIE SEGOUIN"
    },
    {
        "latLng": [
            46.93608,
            -1.511989500000027
        ],
        "name": "BOUCLE D'ART ET VELOURS"
    },
    {
        "latLng": [
            46.85698,
            -1.1738613999999643
        ],
        "name": "BOUDAUD DOMINIQUE"
    },
    {
        "latLng": [
            47.82901,
            -0.6863733999999795
        ],
        "name": "BOUETE MODA CITY"
    },
    {
        "latLng": [
            47.1019,
            -1.3027875000000222
        ],
        "name": "BOULANGERIE DE GORGES"
    },
    {
        "latLng": [
            47.4127,
            -1.3843153999999913
        ],
        "name": "Boulangerie isaac"
    },
    {
        "latLng": [
            47.39483,
            -0.4372792000000345
        ],
        "name": "Boulangerie Jean-Marc EUSEBE"
    },
    {
        "latLng": [
            46.41721,
            -1.5757836999999881
        ],
        "name": "boulangerie patisserie letard loic"
    },
    {
        "latLng": [
            48.15572,
            -0.4017003000000159
        ],
        "name": "Boulangerie PÃ¢tisserie NEAU"
    },
    {
        "latLng": [
            46.45522,
            -1.1622158999999783
        ],
        "name": "Boulangerie Romeur"
    },
    {
        "latLng": [
            47.26811,
            -1.47493529999997
        ],
        "name": "BOUL'PAT ATLANTIQUE"
    },
    {
        "latLng": [
            46.78257,
            -0.8367547000000286
        ],
        "name": "boutchou boutchutes"
    },
    {
        "latLng": [
            46.6214,
            -0.7763201999999865
        ],
        "name": "BOUTET ENTREPRISE"
    },
    {
        "latLng": [
            47.48467,
            -0.5112046000000419
        ],
        "name": "BOVAL- PRESSING DES BANCHAIS"
    },
    {
        "latLng": [
            47.29816,
            -1.5508460999999443
        ],
        "name": "BRANGEON"
    },
    {
        "latLng": [
            47.46442,
            -0.557942599999933
        ],
        "name": "Brasserie de la Gare"
    },
    {
        "latLng": [
            46.855270999999,
            -1.0382670999999846
        ],
        "name": "BREGEON MAUDET"
    },
    {
        "latLng": [
            47.14697,
            -0.6998181000000159
        ],
        "name": "BREMOND ADRIEN"
    },
    {
        "latLng": [
            48.00108,
            0.18308890000002975
        ],
        "name": "BRISSET CHRISTOPHE"
    },
    {
        "latLng": [
            47.15474,
            -1.399517899999978
        ],
        "name": "BRL"
    },
    {
        "latLng": [
            47.97656,
            -0.22740120000003117
        ],
        "name": "BRULON CONFECTION"
    },
    {
        "latLng": [
            46.46346,
            -1.1695760000000064
        ],
        "name": "BRUNET HENRI"
    },
    {
        "latLng": [
            48.11416,
            -0.7295093999999835
        ],
        "name": "BTEM"
    },
    {
        "latLng": [
            47.39563,
            -1.4550756999999521
        ],
        "name": "Bulle de bien-Ãªtre"
    },
    {
        "latLng": [
            47.25608,
            -2.2711709000000155
        ],
        "name": "BURGER 44"
    },
    {
        "latLng": [
            46.6038,
            -1.6646519999999327
        ],
        "name": "BURNELEAU P"
    },
    {
        "latLng": [
            47.2024,
            -1.5785521000000244
        ],
        "name": "C E G"
    },
    {
        "latLng": [
            47.0699,
            -1.2612179999999853
        ],
        "name": "C3P"
    },
    {
        "latLng": [
            47.12721,
            -2.1264062000000195
        ],
        "name": "CABINET MOITIER ET CARRIERE"
    },
    {
        "latLng": [
            47.22714,
            -1.5553529999999682
        ],
        "name": "CAFE DU CANAL"
    },
    {
        "latLng": [
            47.09376,
            -0.902865600000041
        ],
        "name": "CAILLAUD ETABLISSEMENT"
    },
    {
        "latLng": [
            47.1307,
            -1.7528310999999803
        ],
        "name": "CAMELLIS"
    },
    {
        "latLng": [
            47.21393,
            -1.5568433999999343
        ],
        "name": "Camille Albane"
    },
    {
        "latLng": [
            46.60039,
            -1.649409500000047
        ],
        "name": "CAP PISCINE"
    },
    {
        "latLng": [
            47.7544,
            -2.3633499999999685
        ],
        "name": "CAP Solutions Culinaires"
    },
    {
        "latLng": [
            47.99364,
            0.19424979999996594
        ],
        "name": "CARINE K"
    },
    {
        "latLng": [
            47.924009899999,
            0.4815464000000702
        ],
        "name": "CARNOT COIFFURE"
    },
    {
        "latLng": [
            47.84077,
            -0.3340924000000314
        ],
        "name": "CARNOT COIFFURE"
    },
    {
        "latLng": [
            47.44707,
            -2.240037799999982
        ],
        "name": "Carole coiffure"
    },
    {
        "latLng": [
            46.79366,
            -0.9370621000000483
        ],
        "name": "CARON CHRISTOPHE"
    },
    {
        "latLng": [
            46.9165,
            -1.2420549999999366
        ],
        "name": "CAROSTYL"
    },
    {
        "latLng": [
            48.12415,
            -0.01717129999997269
        ],
        "name": "CARPY COIFFEUR"
    },
    {
        "latLng": [
            48.05696,
            -0.7488679000000502
        ],
        "name": "Carrosserie Echard"
    },
    {
        "latLng": [
            46.9792,
            -1.80789070000003
        ],
        "name": "CARROSSERIE FRANCK RONSIN"
    },
    {
        "latLng": [
            48.06543,
            -0.8155503000000408
        ],
        "name": "CARROSSERIE J.F. DELLIERE"
    },
    {
        "latLng": [
            47.22113,
            -1.7270733999999948
        ],
        "name": "CARROSSERIE LES VIEILLES TERRES"
    },
    {
        "latLng": [
            46.85698,
            -1.1738613999999643
        ],
        "name": "CARTRON MOYON"
    },
    {
        "latLng": [
            47.22106,
            -1.5747757999999976
        ],
        "name": "CASCAD"
    },
    {
        "latLng": [
            47.279,
            -0.0694899999999734
        ],
        "name": "CASTEL"
    },
    {
        "latLng": [
            46.68487,
            0.24840159999996558
        ],
        "name": "Cave de Neuville"
    },
    {
        "latLng": [
            47.99354,
            -0.13530500000001666
        ],
        "name": "CAVOL"
    },
    {
        "latLng": [
            47.72877,
            -1.3845969999999852
        ],
        "name": "Centre Hospitalier Chateaubriant"
    },
    {
        "latLng": [
            46.654179,
            -1.4327989999999318
        ],
        "name": "CENTRE HOSPITALIER G.MAZURELLE"
    },
    {
        "latLng": [
            47.49139,
            -0.49804870000002666
        ],
        "name": "CESBRON DALKIA"
    },
    {
        "latLng": [
            46.981770999999,
            -1.810858000000053
        ],
        "name": "CETIH MACHECOUL"
    },
    {
        "latLng": [
            47.08627,
            -1.5589095999999927
        ],
        "name": "CGVL"
    },
    {
        "latLng": [
            46.695201999999,
            -1.615430999999944
        ],
        "name": "CHAIGNE DANIEL"
    },
    {
        "latLng": [
            46.46027,
            -0.7902861999999686
        ],
        "name": "CHAIGNEAU CARRELAGE FONTENAISIEN"
    },
    {
        "latLng": [
            46.90855,
            -1.0960184000000481
        ],
        "name": "CHAIGNEAU LIMOUSIN"
    },
    {
        "latLng": [
            46.71391,
            -2.336863699999981
        ],
        "name": "CHAILLOU PEINTURE"
    },
    {
        "latLng": [
            48.02048,
            0.21251740000002428
        ],
        "name": "CHANTAL CHOPLIN COIFFURE MIXTE"
    },
    {
        "latLng": [
            48.010444,
            0.19427540000003773
        ],
        "name": "CHARCUTERIE DU PRE"
    },
    {
        "latLng": [
            46.92684,
            -0.8974381000000449
        ],
        "name": "CHARCUTERIE PAUL BEGEIN"
    },
    {
        "latLng": [
            48.2509,
            -0.3627136000000064
        ],
        "name": "Charcuterie traiteur"
    },
    {
        "latLng": [
            47.44893,
            -2.316867900000034
        ],
        "name": "Charcuterie Traiteur Morisseau"
    },
    {
        "latLng": [
            46.9704,
            -0.9870362999999998
        ],
        "name": "CHARRIER FRERES"
    },
    {
        "latLng": [
            46.792,
            -1.3185949999999593
        ],
        "name": "CHB HERBRETEAU"
    },
    {
        "latLng": [
            47.486955599999,
            -0.7433571999999913
        ],
        "name": "CHEVALIER AMENAGEMENT"
    },
    {
        "latLng": [
            46.97845,
            -1.2412616000000298
        ],
        "name": "CHOUTEAU JOHNNY"
    },
    {
        "latLng": [
            47.99461,
            -0.15215729999999894
        ],
        "name": "CHRISTINE COIFFURE"
    },
    {
        "latLng": [
            46.99757,
            -0.20592379999993682
        ],
        "name": "CIE EUROPEENNE EMBALLAGE ROBERT SCHISL"
    },
    {
        "latLng": [
            47.3029,
            -2.1871622999999545
        ],
        "name": "CIE INDUST DOCKS MARITIMES TECHNIDIS"
    },
    {
        "latLng": [
            47.17128,
            -1.264333899999997
        ],
        "name": "CJV DISTRIBUTION - Hyper U Vallet"
    },
    {
        "latLng": [
            47.3023,
            -1.4997170000000324
        ],
        "name": "CLABODIS / SUPER U"
    },
    {
        "latLng": [
            47.667414099999,
            -1.6623528000000078
        ],
        "name": "CLADE  SUPER U"
    },
    {
        "latLng": [
            47.94369,
            0.23555160000000797
        ],
        "name": "CLARA BY JESS"
    },
    {
        "latLng": [
            46.73188,
            -1.5059685999999601
        ],
        "name": "CLAUTOUR"
    },
    {
        "latLng": [
            47.3447021,
            -0.43756469999993897
        ],
        "name": "CLEM Boulangerie Moulin"
    },
    {
        "latLng": [
            47.2778,
            -2.198658000000023
        ],
        "name": "CLEMESSY SERVICES"
    },
    {
        "latLng": [
            46.65188,
            -1.4322626000000582
        ],
        "name": "CLIMAT VENDEE"
    },
    {
        "latLng": [
            47.21627,
            -0.18871420000004946
        ],
        "name": "CLOS DE LA ROUSSELIERE"
    },
    {
        "latLng": [
            47.83395,
            -0.7178890000000138
        ],
        "name": "Coccimarket"
    },
    {
        "latLng": [
            48.00097,
            0.19766949999996086
        ],
        "name": "COIF AND CO"
    },
    {
        "latLng": [
            48.0629,
            0.5075799999999617
        ],
        "name": "COIFF et CO"
    },
    {
        "latLng": [
            48.22098,
            0.592367700000068
        ],
        "name": "COIFF ET VOUS"
    },
    {
        "latLng": [
            48.0058,
            0.19794530000001487
        ],
        "name": "COIFFURE ALLEGRE"
    },
    {
        "latLng": [
            47.99539,
            0.17805759999998827
        ],
        "name": "COIFFURE ELLE ET LUI"
    },
    {
        "latLng": [
            47.94367,
            0.04154829999993126
        ],
        "name": "COIFFURE OLIVIA"
    },
    {
        "latLng": [
            47.21218,
            -1.7279125000000022
        ],
        "name": "COMMUNE DE COUERON"
    },
    {
        "latLng": [
            46.9821,
            -1.3223544999999604
        ],
        "name": "COMODIS"
    },
    {
        "latLng": [
            47.39633,
            -0.5523052999999436
        ],
        "name": "Compass Group France"
    },
    {
        "latLng": [
            48.05434,
            -0.791754200000014
        ],
        "name": "COMPTACOM"
    },
    {
        "latLng": [
            47.36538,
            -1.17686290000006
        ],
        "name": "CONSEIL DEP. DE LOIRE-ATLANTIQUE"
    },
    {
        "latLng": [
            46.7923,
            -1.883592799999974
        ],
        "name": "CONSTRUCTIONS SOULLANDAISES"
    },
    {
        "latLng": [
            47.45927,
            -0.7942508999999518
        ],
        "name": "CORPA"
    },
    {
        "latLng": [
            46.891118,
            -1.0357770000000528
        ],
        "name": "COSIKA"
    },
    {
        "latLng": [
            46.8517,
            -0.8216489999999794
        ],
        "name": "COTTON CHRISTOPHE"
    },
    {
        "latLng": [
            48.0969,
            -0.8837717000000112
        ],
        "name": "COUPE XAVIER"
    },
    {
        "latLng": [
            46.76162,
            -2.0197594999999637
        ],
        "name": "COUTON PLATRE"
    },
    {
        "latLng": [
            47.1186791,
            -1.502969500000063
        ],
        "name": "COUVREURS DE L ATLANTIQUE"
    },
    {
        "latLng": [
            47.235741999999,
            -1.6601389999999583
        ],
        "name": "CP Georges Renault"
    },
    {
        "latLng": [
            47.604,
            -1.7719213999999965
        ],
        "name": "CPE SERVICE"
    },
    {
        "latLng": [
            47.82697,
            0.07562289999998484
        ],
        "name": "CREA PASSION"
    },
    {
        "latLng": [
            46.9845,
            -0.9324750000000677
        ],
        "name": "CREASTYL"
    },
    {
        "latLng": [
            47.16115,
            -1.5458306000000448
        ],
        "name": "CREPERIE ALIZE"
    },
    {
        "latLng": [
            46.7672114,
            -1.5183885000000146
        ],
        "name": "CREPERIE DU MOULIN A ELISE"
    },
    {
        "latLng": [
            47.296735899999,
            -1.4917675000000372
        ],
        "name": "CrÃªperie HORS DU TEMPS"
    },
    {
        "latLng": [
            47.126132299999,
            -2.12548019999997
        ],
        "name": "CRESCENDO"
    },
    {
        "latLng": [
            47.5236,
            -0.7409430000000157
        ],
        "name": "CROISE FABRICE"
    },
    {
        "latLng": [
            47.21112,
            -1.5293314000000464
        ],
        "name": "CTRE DEP GESTION FONCTION PUB TERRITOR"
    },
    {
        "latLng": [
            48.7734,
            2.0081562000000304
        ],
        "name": "CTRE ETUDES EXPERTISE RISQUES ENVIRON"
    },
    {
        "latLng": [
            48.7734,
            2.0081562000000304
        ],
        "name": "CTRE ETUDES EXPERTISE RISQUES ENVIRON"
    },
    {
        "latLng": [
            47.114917299999,
            -2.103911700000026
        ],
        "name": "D B B C G"
    },
    {
        "latLng": [
            47.05971,
            -0.9124831000000313
        ],
        "name": "D.O. DU CHOLETAIS"
    },
    {
        "latLng": [
            47.09205,
            -1.0692782999999508
        ],
        "name": "DA SILVA RIBEIRO JOSE ALBERTO"
    },
    {
        "latLng": [
            47.1936,
            -1.4910403000000088
        ],
        "name": "DARTY NANTES SAINT SEBASTIEN"
    },
    {
        "latLng": [
            47.19204,
            -1.6852195000000165
        ],
        "name": "DCNS"
    },
    {
        "latLng": [
            47.05603,
            -0.9420189999999593
        ],
        "name": "DEFONTAINE CONSTRUCTION"
    },
    {
        "latLng": [
            47.0095,
            -1.1946980000000167
        ],
        "name": "DEFONTAINE SA"
    },
    {
        "latLng": [
            43.62183,
            3.840345500000012
        ],
        "name": "DEPARTEMENT DE L HERAULT"
    },
    {
        "latLng": [
            48.06971,
            -0.7667993000000024
        ],
        "name": "DEPARTEMENT DE LA MAYENNE"
    },
    {
        "latLng": [
            48.00191,
            0.19868670000005295
        ],
        "name": "DEPARTEMENT DE LA SARTHE"
    },
    {
        "latLng": [
            46.674236,
            -1.4283739999999625
        ],
        "name": "DEPARTEMENT DE VENDEE"
    },
    {
        "latLng": [
            47.35824,
            1.7444500999999946
        ],
        "name": "DESJOYAUX SANCHEZ PISCINES"
    },
    {
        "latLng": [
            47.2346,
            -0.008381500000041342
        ],
        "name": "DEZE VINCENT"
    },
    {
        "latLng": [
            47.2163,
            0.059655000000020664
        ],
        "name": "Diane de MÃ©ridor"
    },
    {
        "latLng": [
            47.21083,
            -1.7283264999999801
        ],
        "name": "Didier BROCHARD"
    },
    {
        "latLng": [
            47.47582,
            -0.5479674000000614
        ],
        "name": "didier godineau"
    },
    {
        "latLng": [
            47.2252,
            -1.6413754000000154
        ],
        "name": "DIESEL ENERGIE"
    },
    {
        "latLng": [
            46.7161,
            -1.8938390000000709
        ],
        "name": "DILLET AGENCEMENT"
    },
    {
        "latLng": [
            47.24009,
            -1.64172480000002
        ],
        "name": "DISTRI INDUST VEHICULES DIV"
    },
    {
        "latLng": [
            46.83492,
            -1.2759201000000076
        ],
        "name": "DOM DECO"
    },
    {
        "latLng": [
            47.3622,
            -0.5425720000000638
        ],
        "name": "DOMAINE DES ROCHETTES"
    },
    {
        "latLng": [
            47.02908,
            -0.9161005999999361
        ],
        "name": "DOUX LAIT PRODUCTION"
    },
    {
        "latLng": [
            47.4724,
            -0.5510973000000376
        ],
        "name": "DRESSCODE"
    },
    {
        "latLng": [
            48.02364,
            0.34343779999994695
        ],
        "name": "EARL Bruneau"
    },
    {
        "latLng": [
            48.6426,
            0.853872000000024
        ],
        "name": "EARL CARON Pascal et associÃ©s"
    },
    {
        "latLng": [
            48.38274,
            -0.015794099999993705
        ],
        "name": "EARL de la Planche"
    },
    {
        "latLng": [
            47.1414,
            0.36854330000005575
        ],
        "name": "EARL DEMOIS"
    },
    {
        "latLng": [
            47.63074,
            3.1152150000000347
        ],
        "name": "EARL DES SATILLATS"
    },
    {
        "latLng": [
            47.213,
            -0.5296783000000005
        ],
        "name": "EARL Du Petit Clocher"
    },
    {
        "latLng": [
            46.6386,
            -1.31968889999996
        ],
        "name": "EARL JURAIRES"
    },
    {
        "latLng": [
            46.9559,
            -0.9773020000000088
        ],
        "name": "EARL LE CABRI O LAIT"
    },
    {
        "latLng": [
            46.588,
            -1.740970500000003
        ],
        "name": "EARL LE GRAND BESSON"
    },
    {
        "latLng": [
            46.54728,
            -1.0058418999999503
        ],
        "name": "EARL MATHONNEAU-FORGERIT"
    },
    {
        "latLng": [
            47.2058891,
            -0.43301950000000033
        ],
        "name": "EARL THOMAS RICHARD Domaine de St Martin"
    },
    {
        "latLng": [
            47.93034,
            0.18603529999995772
        ],
        "name": "ECO PRESSING - YANN LAVERIE"
    },
    {
        "latLng": [
            47.33819,
            -0.35534640000003037
        ],
        "name": "EGCA"
    },
    {
        "latLng": [
            46.69421,
            -0.6998071000000436
        ],
        "name": "EHPAD la Pierre Rose"
    },
    {
        "latLng": [
            47.142922899999,
            -0.9328121999999439
        ],
        "name": "EIRL DAVID DIXNEUF/CAROIVISION"
    },
    {
        "latLng": [
            47.06612,
            -0.8874786999999742
        ],
        "name": "ELECTRICITE THIERRY ET SEVERIN METAIS"
    },
    {
        "latLng": [
            47.18575,
            -1.5921256000000312
        ],
        "name": "ENDEL ENGIE"
    },
    {
        "latLng": [
            47.22171,
            -1.6237171000000217
        ],
        "name": "ENEDIS"
    },
    {
        "latLng": [
            47.48087,
            -0.5504369000000224
        ],
        "name": "ENEDIS"
    },
    {
        "latLng": [
            48.22944,
            0.13107719999993606
        ],
        "name": "ENEDIS"
    },
    {
        "latLng": [
            47.47922,
            -0.5125523000000385
        ],
        "name": "ENGIE COFELY"
    },
    {
        "latLng": [
            46.92619,
            -0.7408646999999746
        ],
        "name": "ENTREPRISE COUTANT"
    },
    {
        "latLng": [
            46.79389,
            -0.9369954000000007
        ],
        "name": "ENTREPRISE MOREAU"
    },
    {
        "latLng": [
            47.72062,
            -1.0288524999999709
        ],
        "name": "EOLANE COMBREE"
    },
    {
        "latLng": [
            47.1624,
            -1.2664740000000165
        ],
        "name": "Escale BeautÃ©"
    },
    {
        "latLng": [
            46.45885,
            -1.137808199999995
        ],
        "name": "ETABLISSEMENTS REMBAUD"
    },
    {
        "latLng": [
            47.30138,
            -1.840894599999956
        ],
        "name": "EURL Babin Claude"
    },
    {
        "latLng": [
            47.017657799999,
            -2.296042199999988
        ],
        "name": "eurl du vieux loup de mer"
    },
    {
        "latLng": [
            47.17786,
            -1.866720100000066
        ],
        "name": "EURL Guilloux Bertrand"
    },
    {
        "latLng": [
            47.2349,
            -0.7236450000000332
        ],
        "name": "EURL RECA"
    },
    {
        "latLng": [
            47.7076,
            -1.395334000000048
        ],
        "name": "F O I 44"
    },
    {
        "latLng": [
            46.82008,
            -1.2636032000000341
        ],
        "name": "FB CONCEPT"
    },
    {
        "latLng": [
            47.36405,
            -2.333289000000036
        ],
        "name": "FIBROPTEL"
    },
    {
        "latLng": [
            46.50067,
            -1.464219299999968
        ],
        "name": "FORT FABRICE"
    },
    {
        "latLng": [
            46.63804,
            -0.7550513999999566
        ],
        "name": "FPV INDUSTRIE"
    },
    {
        "latLng": [
            46.36978,
            -0.5870426999999836
        ],
        "name": "FRERE CONCEPT"
    },
    {
        "latLng": [
            47.14558,
            -0.2527317999999923
        ],
        "name": "GAEC DESNOUHES"
    },
    {
        "latLng": [
            46.78581,
            -1.7585183999999572
        ],
        "name": "GAEC LE BOIS SOLEIL"
    },
    {
        "latLng": [
            46.95471,
            -1.2291652000000113
        ],
        "name": "GAEC LES BOIS NEUFS"
    },
    {
        "latLng": [
            46.75729,
            -1.2483349000000317
        ],
        "name": "GAILLARD ETS"
    },
    {
        "latLng": [
            46.94522,
            -1.2908376000000317
        ],
        "name": "GARAGE JEAN LOUIS REMAUD"
    },
    {
        "latLng": [
            46.7941998,
            -0.9364454000000251
        ],
        "name": "GAUTIER FRANCE"
    },
    {
        "latLng": [
            47.30226,
            -0.4494090000000597
        ],
        "name": "GIRONA EDOUARD"
    },
    {
        "latLng": [
            46.4239,
            -1.278065999999967
        ],
        "name": "GORGE MIGUEL"
    },
    {
        "latLng": [
            47.1214,
            -1.1273390000000063
        ],
        "name": "GRASSET CHIRON"
    },
    {
        "latLng": [
            47.41883,
            1.023965999999973
        ],
        "name": "GROUPE MECACHROME"
    },
    {
        "latLng": [
            48.074393699999,
            -0.7571811999999909
        ],
        "name": "GUY GERARD THERMOBAINS"
    },
    {
        "latLng": [
            48.22608,
            0.12851580000005924
        ],
        "name": "HOTEL DE LA BARQUE"
    },
    {
        "latLng": [
            46.98242,
            -1.317801099999997
        ],
        "name": "INNOV OUVERTURES"
    },
    {
        "latLng": [
            47.7804,
            -1.297313000000031
        ],
        "name": "INTER'VOLAILLES"
    },
    {
        "latLng": [
            46.6003,
            -1.649883100000011
        ],
        "name": "JACQUES LAURENT"
    },
    {
        "latLng": [
            47.21281,
            -0.06856629999992947
        ],
        "name": "JOULIN PHILIPPE"
    },
    {
        "latLng": [
            47.24993,
            -1.48738579999997
        ],
        "name": "K MELEONE"
    },
    {
        "latLng": [
            48.57404,
            -4.296606600000018
        ],
        "name": "KOUIGN AMANN BERROU"
    },
    {
        "latLng": [
            46.72305,
            -2.3485948000000008
        ],
        "name": "LA BELLE MAISON"
    },
    {
        "latLng": [
            47.003396599999,
            -1.0152583999999933
        ],
        "name": "LA DOUCEUR DES ARCADES"
    },
    {
        "latLng": [
            47.05603,
            -0.9420189999999593
        ],
        "name": "LA MIE CALINE"
    },
    {
        "latLng": [
            47.26,
            -0.08077490000005128
        ],
        "name": "LA MINE D OR"
    },
    {
        "latLng": [
            47.531282999999,
            -0.5688769999999295
        ],
        "name": "LABELLAGE"
    },
    {
        "latLng": [
            47.18498,
            -1.4634237999999868
        ],
        "name": "LCJ CAPTEURS"
    },
    {
        "latLng": [
            47.50108,
            -0.5708667000000105
        ],
        "name": "Le grand Jardin"
    },
    {
        "latLng": [
            47.75943,
            0.4015767999999298
        ],
        "name": "LE RELAIS DU CHEVAL BLANC"
    },
    {
        "latLng": [
            47.628551599999,
            -1.8327679999999873
        ],
        "name": "LE TENDRE EPI"
    },
    {
        "latLng": [
            47.21098,
            -1.6214159999999538
        ],
        "name": "LES MOULINETS AUTOMOBILES"
    },
    {
        "latLng": [
            46.64177,
            -0.7484918000000107
        ],
        "name": "LOGIDECOR"
    },
    {
        "latLng": [
            47.16775,
            -1.4740189999999984
        ],
        "name": "ma boulangerie SAS KASBANE"
    },
    {
        "latLng": [
            46.57427,
            -1.5079090000000406
        ],
        "name": "MAGUNIVERS"
    },
    {
        "latLng": [
            46.44735,
            -0.9402783000000454
        ],
        "name": "MALVAUD CONSTRUCTION"
    },
    {
        "latLng": [
            47.26461,
            -1.6270884000000478
        ],
        "name": "MARICLEM"
    },
    {
        "latLng": [
            47.28823,
            -1.437795000000051
        ],
        "name": "MECA MARINE PLAISANCE"
    },
    {
        "latLng": [
            46.79366,
            -0.9370621000000483
        ],
        "name": "MENUISERIE COTILLON"
    },
    {
        "latLng": [
            47.28213,
            -2.4051558999999543
        ],
        "name": "Nina crÃ©ation"
    },
    {
        "latLng": [
            47.0358861,
            -1.6416329999999562
        ],
        "name": "OSAISONS"
    },
    {
        "latLng": [
            47.123,
            -0.6668070000000625
        ],
        "name": "PINIER VIANDE"
    },
    {
        "latLng": [
            46.75434,
            -1.4323881000000256
        ],
        "name": "PPRV"
    },
    {
        "latLng": [
            47.07984,
            -0.062487199999964105
        ],
        "name": "RENARD Lionel"
    },
    {
        "latLng": [
            47.24943,
            -1.522779700000001
        ],
        "name": "RESTORIA"
    },
    {
        "latLng": [
            46.52415,
            -0.6865141000000676
        ],
        "name": "ROYER CHRISTIAN"
    },
    {
        "latLng": [
            47.21461,
            -1.5544198000000051
        ],
        "name": "Salon DESSFM"
    },
    {
        "latLng": [
            47.1716,
            -1.356096999999977
        ],
        "name": "SARL BACHELIER"
    },
    {
        "latLng": [
            47.26327,
            -1.5932354999999916
        ],
        "name": "SARL DROUET"
    },
    {
        "latLng": [
            47.25989,
            -0.07861560000003465
        ],
        "name": "SARL LA DUCHESSE ANNE"
    },
    {
        "latLng": [
            47.47317,
            -0.6026434000000336
        ],
        "name": "\"SARL NADFI \"\"Le Booster\"\"\""
    },
    {
        "latLng": [
            47.11847,
            -1.50274330000002
        ],
        "name": "SARL ROUAULT"
    },
    {
        "latLng": [
            47.22798,
            -1.6528577999999925
        ],
        "name": "SAS FOURRIER"
    },
    {
        "latLng": [
            46.82737,
            0.9302978000000621
        ],
        "name": "SCEA ST MICHEL VAUCOUBON"
    },
    {
        "latLng": [
            47.24009,
            -1.64172480000002
        ],
        "name": "SDO INVESTISSEMENT"
    },
    {
        "latLng": [
            46.9605,
            -1.2934443000000329
        ],
        "name": "SOC DES ETS BOUGRO"
    },
    {
        "latLng": [
            46.5147,
            -1.7894559999999728
        ],
        "name": "TOPOME ARCHITECTURE"
    },
    {
        "latLng": [
            47.1931,
            -1.5169140000000425
        ],
        "name": "Val attitude"
    },
    {
        "latLng": [
            46.72,
            -1.4700229999999692
        ],
        "name": "VINCENT CEDRIC"
    }
];


var listeOK = [];


for (var i = 0; i < listeCoord.length ; i++){
    listeOK.push( {latLng: listeCoord[i]["latLng"], name: listeCoord[i]["name"] });
}

/*
console.log(listeOK);

var f = new File(["blop,blop,blop"], "filename.txt", {type: "text/plain"});


function readBlob(opt_startByte, opt_stopByte) {

    var files = document.getElementById('files').files;

//    console.log(files);

    var file = files[0];
    var start = parseInt(opt_startByte) || 0;
    var stop = parseInt(opt_stopByte) || file.size - 1;

    var reader = new FileReader();

    reader.onload = function(progressEvent){

        // By lines
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){

            if (line) {
                var parsed = lines[line].split(/,/);
                var name = parsed[0];
                var lng = Number(parsed[1]);
                var lat = parsed[2];
                lat = Number(lat.substring(0,lat.length-3));

                //       console.log(lines[line]);
                //      console.log(name);
                liste.push({latLng: [lat, lng], name: name});
            }

        }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}

console.log(liste);
console.log(liste[0]);

document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {

    if (evt.target.tagName.toLowerCase() == 'button') {
        var startByte = evt.target.getAttribute('data-startbyte');
        var endByte = evt.target.getAttribute('data-endbyte');
        readBlob(startByte, endByte);
    }
}, false);*/

$(function(){
    var map;

    map = new jvm.Map({
        container: $('#map'),
        map: 'fr_pdl_2016_merc',
        zoomOnScroll: false,
  /*      regionsSelectable: true,*/
        backgroundColor: '#FAFAFA',
     /*   markersSelectable: true,*/
        markers: listeOK,
        markerStyle: {
            initial: {
                fill: '#009BC2'
            },
            selected: {
                fill: '#CA0020'
            }
        },
        regionStyle: {
            initial: {

                fill: '#AECF2A'
            },
            selected: {
                fill: '#F4A582'
            }
        },
        series: {
            markers: [{
                attribute: 'r',
                values: 300
            }]
        },
  /*      onRegionSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(map.getSelectedRegions())
                );
            }
        },*/
        onMarkerSelected: function(){
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-markers',
                    JSON.stringify(map.getSelectedMarkers())
                );
            }
        }
    });

/*    map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );*/
    map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );

});