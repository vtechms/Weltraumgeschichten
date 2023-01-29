namespace VisualNovel {
  export async function NeueSzene24(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.weg1);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Der Virus wurde erfolgreich mit der Hilfe von " +
        gameProgress.playername +
        " beseitigt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Wissenschaftler programmierten den Virus für ihre Zwecke um."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Mei bietet Aiko und " +
        gameProgress.playername +
        " einen Job bei der IG an."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Sie nehmen das Angebot dankend an."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Kurze Zeit später gelang es der IG mithilfe von Alice eine unbekannte Organisation im Schatten aufzuspüren und zu beseitigen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Es stellte sich heraus, dass diese Organisation die Schuldigen hinter den Angriffen waren. Sofi und David gehörten dieser Organisation an."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Aiko verließ die IG und " +
        gameProgress.playername +
        " verlor den Kontakt, als die IG begann, ihre Industrie-Leistung zu verdreifach – mit der Hilfe von Alice. "
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Darunter litten die Bewohner und der Plant stark, was Aiko nicht unterstützen wollte."
    );

    await ƒS.Speech.tell(
      characters.narrator,
      gameProgress.playername +
        " fand gefallen an der Rolle bei der IG. Ein Bürgerkrieg begann und die Rebellen lehnten sich gegen die Machthaber auf."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Sie hatten aber keine Chance gegen die IG und Alice."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Doch hat sich nichts wirklich verändert seit dem Beginn der Reise."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die größte Veränderung durchzog " +
        gameProgress.playername +
        ". " +
        gameProgress.playername +
        " ist nicht mehr dieselbe Person wie vor den Erlebnissen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Alte Gewohnheiten kamen nach und nach wieder und das Leben fuhr fort, nur unter einer unangefochtenen Führung."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Mit der Verdreifachung der Leistung der Fabriken kippte das fragile Ökosystem von Trojoko vollständig!"
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Nach einem Jahr im Paradis brach die Umwelt vollständig zusammen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Auf dem Planeten brachen tiefe Felsspalten auf. Und sobald nur die Haut mit der Luft in Kontakt kam, gab es schreckliche chemische Verbrennungen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Die Menschen verkrochen sich in gefilterten Bunkern und warteten auf ein Wunder."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Doch für ein Wunder war es jetzt zu spät."
    );

    await ƒS.Character.hide(characters.sprecher);

    await ƒS.update(1);

    await ƒS.update(1);

    return "thanks-for-playing";
  }
}
