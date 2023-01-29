namespace VisualNovel {
  export async function NeueSzene05(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.zuhause);
    await ƒS.update(
      transitions.wipeToMiddle.duration,
      transitions.wipeToMiddle.alpha,
      transitions.wipeToMiddle.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sprecher,
      characters.sprecher.pose.happy,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sprecher,
      "Zuhause angekommen legte " +
        gameProgress.playername +
        " die Kontaktlinse mit Sona ab und ging ins Bett."
    );

    await ƒS.Character.hide(characters.sona);
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.sprecher,
      "Am nächsten Morgen klingelt das Telefon."
    );

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);
    await ƒS.Speech.tell(characters.player, "Ja Hallo?");
    await ƒS.Speech.tell(
      characters.john,
      "Guten Morgen, mein Name ist John, ich bin Offizier bei der IG."
    );
    await ƒS.Speech.tell(
      characters.john,
      "Mir wurde angewiesen, nachzufragen, ob sie Aiko für unsere Sache gewinnen konnten."
    );
    await ƒS.Speech.tell(characters.player, " Ja, Aiko hilft uns.");
    await ƒS.Speech.tell(
      characters.john,
      "Sehr gut, dann hol bitte Aiko ab und kommt zur Adresse, die ich dir später schicken werde."
    );
    await ƒS.Speech.tell(characters.john, "Bis später.");

    await ƒS.update(1);
  }
}
