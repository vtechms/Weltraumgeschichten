namespace VisualNovel {
  export async function NeueSzene06(): ƒS.SceneReturn {
    // Hides text box
    ƒS.Speech.hide();

    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.vaikoZuhause);
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
      gameProgress.playername +
        " holt Aiko ab und sie machen sich zu Fuß auf den Weg zur Adresse, die ihnen John mitgeteilt hat."
    );
    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Was denkst du, wo dieser Platz ist?"
    );
    await ƒS.Speech.tell(
      characters.player,
      "Ich kenne diese Zone aus der Zeitung, sie besteht überwiegend aus Regierungsbüros der IG."
    );
    await ƒS.Speech.tell(characters.aiko, "Kennst du den Weg?");

    await ƒS.Character.hide(characters.sprecher);
    await ƒS.update(1);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.talk,
      ƒS.positionPercent(70, 150)
    );

    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.player,
      "Ich bin mir nicht ganz sicher, ich habe heute Morgen leider vergessen Sona einzupacken."
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Du und deiner Vergesslichkeit wieder."
    );
    await ƒS.Character.hide(characters.aiko);

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.happy,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.Speech.tell(
      characters.aiko,
      "Ich habe gerade Lea geschrieben, wir treffen uns mit ihr und Sofi am Eingang der Zone."
    );
    await ƒS.Speech.tell(characters.aiko, "Kennst du den Weg bis dorthin?");
    await ƒS.Speech.tell(
      characters.player,
      "Bis zur Zone kenn ich den Weg, sind aber nicht die besten Straßen, durch die wir müssen."
    );
    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.aiko,
      characters.aiko.pose.talk,
      ƒS.positionPercent(70, 150)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.aiko,
      "Mit der Bahn können wir nicht fahren, das Netz ist schon wieder ausgefallen. Sollen wir zu Fuß gehen?"
    );
    await ƒS.Speech.tell(
      characters.player,
      "Ja, lass uns den Weg zu Fuß gehen!"
    );
    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.aiko);
    await ƒS.Character.hide(characters.aiko);
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.aiko, "Alles klar, lass uns gehen.");

    await ƒS.update(1);
  }
}
