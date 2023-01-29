namespace VisualNovel {
  export async function NeueSzene07(): ƒS.SceneReturn {
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
      characters.sprecher,
      "Der Weg, den " +
        gameProgress.playername +
        " und Aiko gehen mussten, war weit. Entfernt von den riesigen Hochhäusern vorbei an den Biotronikfarmen und Öl-Förderanlagen."
    );
    await ƒS.Speech.tell(characters.sprecher, "Durch Neon erfüllte Straßen.");
    await ƒS.Speech.tell(
      characters.sprecher,
      "Werbung für Glücksspiel und Erotik erleuchtet morgens wie abends die Gassen."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "In manchen Zonen gab es den ganzen Tag kein leicht."
    );
    await ƒS.Speech.tell(
      characters.sprecher,
      "Viel zu groß ist die Luftverschmutzung und die Megabauten blockieren dann auch noch den letzten Lichtstrahl."
    );

    await ƒS.update(1);
  }
}
