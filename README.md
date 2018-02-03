![Hyblab 2017][1]
==========

Source code of all the projects of [Hyblab 2018][2]. Hyblab is a datajournalism project organized by [Ouest Medilab][3] in the city of Nantes (France) from January 18 to February 07, 2018.

Three schools participated in this project:

 - [SciencesCom][4] (journalism)
 - [Polytech Nantes][5] (computer science)
 - [AGR-L'école de l'image][6] (web design)


The 9 projects where proposed by different local and national media and independent journalists:

- [La Confédération de l’Artisanat et des Petites Entreprises du Bâtiment (CAPEB)](http://www.capeb-loireatlantique.com/o/)
- [Le département de la Loire Atlantique](https://www.loire-atlantique.fr/)
- [Eau et rivières de Bretagne](http://www.eau-et-rivieres.asso.fr)
- [France 3 Bretagne](https://france3-regions.francetvinfo.fr/bretagne/)
- [France 3 Pays de la Loire](https://france3-regions.francetvinfo.fr/bretagne/)
- [Le Musée Jules-Verne](http://www.julesverne.nantesmetropole.fr/home.html)
- [Nantes Sainte-Nazaire développement](https://www.nantes-saintnazaire.fr)
- [Ouest France](https://www.ouest-france.fr)
- [La région Pays de la Loire](http://www.paysdelaloire.fr)

[1]: http://www.hyblab.fr/wp-content/uploads/2017/09/HYBLAB-datajournalisme-nantes.jpg
[2]: http://www.hyblab.fr
[3]: http://www.ouestmedialab.fr
[4]: http://www.sciencescom.org
[5]: http://www.polytech.univ-nantes.fr
[6]: http://www.agrnantes.fr

# How to run the code ?

- Download the code...
- Install a recent version of nodejs
- Type `npm install` at the root of the code folder
- Type `npm start` to launch a local server at 127.0.0.1 on port 8080
- You can now visit any project at http://127.0.0.1:8080/name_of_the_projet. For example: http://127.0.0.1:8080/simple-example
- **Warning:** any request made to an unknow address (ex: http://127.0.0.1:8080, or http://127.0.0.1:8080/something_that_does_not_exist) will be redirected to : http://www.hyblab.fr/