namespace VisualNovel {
  export async function SceneEndPositive7(): ƒS.SceneReturn {
    // Shows background image / transitions into background image
    await ƒS.Location.show(locations.vorRebellen);
    await ƒS.update(
      transitions.wipeRightToLeft.duration,
      transitions.wipeRightToLeft.alpha,
      transitions.wipeRightToLeft.edge
    );

    // Hides text box
    ƒS.Speech.hide();

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.superangry2,
      ƒS.positionPercent(70, 100)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.mike,
      "Du bist also der kleine Pisser, der mir die ganze Zeit auf der Nase rumtanzt."
    );

    await ƒS.Character.hide(characters.mike);
    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.mike,
      characters.mike.pose.angry2,
      ƒS.positionPercent(70, 100)
    );

    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.mike,
      "Darf ich mich vorstellen, ich bin Mike und ich leite die Hand von DoS."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Ihr habt da einen USB-Stick, der mir gehört und die kleine Aiko darf mir noch beim Entschlüsseln des neuen Zuganges helfen."
    );
    await ƒS.Speech.tell(
      characters.mike,
      "Gebt mir den USB-Stick und Aiko oder meine Leuten werden euch den Arsch aufreiße!"
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sofi,
      characters.sofi.pose.sad,
      ƒS.positionPercent(15, 100)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.sofi,
      "So sieht's aus. Her mit dem verdammten USB-Stick."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.chan,
      characters.chan.pose.angry,
      ƒS.positionPercent(30, 120)
    );
    await ƒS.update(1);
    await ƒS.Speech.tell(
      characters.chan,
      "Hört auf die Kleine, sonst gibt es ein paar."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.jin,
      characters.jin.pose.sad,
      ƒS.positionPercent(40, 125)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(
      characters.jin,
      "Die pissen sich ja schon vor Angst fast ein."
    );

    // Defines which character is to be drawn at which position on canvas, but does not draw character on canvas
    await ƒS.Character.show(
      characters.sun,
      characters.sun.pose.normal,
      ƒS.positionPercent(60, 120)
    );
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.sun, "Gebt uns den USB-Stick und Aiko!");

    // Gives player answer choices and lets player choose
    let choices = {
      a: "*Mike den USB-Stick und Aiko aushändigen.*",
      b: "*Wieder nach drinnen flüchten.*",
    };
    let selectedChoice = await ƒS.Menu.getInput(choices, "decision");
    ƒS.Sound.play(sounds.buttonClick, 1, false); // Plays this sound once
    // Does something depending on player choice
    if (selectedChoice == choices.a) {
      await ƒS.Speech.tell(
        characters.narrator,
        "Mike kann mithilfe von Aiko seinen finsteren Plan in die Tat umsetzten."
      );

      await ƒS.Character.hide(characters.sofi);
      await ƒS.Character.hide(characters.chan);
      await ƒS.Character.hide(characters.jin);
      await ƒS.Character.hide(characters.mike);
      await ƒS.Character.hide(characters.sun);
      await ƒS.update(1);
      let currentScenceId = "end-positive7";
      gameProgress.gameOverSceneId = currentScenceId;
      return "game-over";
    } else if (selectedChoice == choices.b) {
      await ƒS.Speech.tell(characters.player, "Los, rein!");
    }

    await ƒS.Character.hide(characters.sofi);
    await ƒS.Character.hide(characters.chan);
    await ƒS.Character.hide(characters.jin);
    await ƒS.Character.hide(characters.mike);
    await ƒS.Character.hide(characters.sun);

    await ƒS.update(1);

    // Visual novel has reached the positive end
  }
}
