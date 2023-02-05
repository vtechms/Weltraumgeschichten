namespace VisualNovel {
  export async function SceneEndNegative3(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.weg1);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image

    // Sets speech speed in characters per millisecond
    ƒS.Speech.setTickerDelays(60, 5000);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.narrator,
      "Alice hat nun Zugriff auf alles, was in Trojoko geschieht."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Unter der Kontrolle von Skarn manipulieren sie nun alles und jeden, wie es ihnen gefällt."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Unter der Behauptung Trojoko Rebellen seien schuld, begann IG eine großangelegte Säuberung, worauf hin ein Bürgerkrieg ausbrach."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Bei mehreren Anschlägen auf beiden Seiten vielen die führenden Persönlichkeiten - und was zurückblieb waren Chaos, Leid und Verderben."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Im Moment der Verzweiflung erhob sich Skarn aus dem Schatten und konnte die Probleme, die er selbst verursacht hatte, beheben."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Durch das gewonnen Vertrauen wählten sie ihn zum Oberhaupt der Neuen Welt mit dir an seiner Seite."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Das Leben war gut. Geld, Frauen, Ansehen. Wirklich nichts, was euch sorgen bereiten würde."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Doch hat sich nichts verändert."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Alte Gewohnheiten kamen nach und nach wieder und das Leben fuhr fort, nur unter einer anderen Führung."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Mit der Wiederaufnahme der Fabriken der IG kippte alles!"
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Nach einem Jahr im Paradis brach die Umwelt vollständig zusammen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Auf dem Planeten brachen tiefe Felsspalten auf. Und sobald nur die Haut mit der Luft in Kontakt kam, gab es schreckliche chemischen Verbrennungen."
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

    // Visual novel has reached the negative end
    return "thanks-for-playing"
  }
}
