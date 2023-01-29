namespace VisualNovel {
  export async function NeueSzene12(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();
    ƒS.Sound.play(sounds.hvd1, 1, true);
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.dos);
    await ƒS.update(
      transitions.wipeLeftToRight.duration,
      transitions.wipeLeftToRight.alpha,
      transitions.wipeLeftToRight.edge
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.unbekannt,
      "Ich weiß nicht, ob ihr schon mitbekommen habt, aber die LG schickt eine Gruppe Forscher nach OmegaXV."
    );
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.normal,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.unbekannt,
      "Ich möchte, dass dieses Schiff das Ziel nie erreicht, habt ihr das verstanden?"
    );
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.talk,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.normal,
      ƒS.positionPercent(30, 130)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.chan,
      "Wir haben verstanden, ich habe bereit unseren Kontakt informiert."
    );

    await ƒS.Speech.tell(
      characters.chan,
      "Ich mach mich mit den Jungs gleich auf den Weg."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.jin,
      characters.jin.pose.normal,
      ƒS.positionPercent(15, 130)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.jin,
      "Alles klar, wir werden sie nicht enttäuschen."
    );
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sun,
      characters.sun.pose.normal,
      ƒS.positionPercent(45, 130)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sun, "Auf keinen Fall!");
    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.narrator,
      "In der Zwischenzeit sind Sofi, David und " +
        gameProgress.playername +
        " am Raumhafen angekommen."
    );
    await ƒS.Speech.tell(
      characters.narrator,
      "Am Raumhafen wartet ein Schiff auf sie, welches sie auf den Planeten OmegaXV bringt."
    );

    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.jin);
    await ƒS.Character.hide(characters.sun);

    ƒS.Sound.fade(sounds.hvd1, 0, 1, false);
    await ƒS.update(1);
  }
}
