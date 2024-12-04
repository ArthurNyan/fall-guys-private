import { openDiscordInviteDialog } from "playroomkit";
import { useGameState } from "../hooks/useGameState";
import { Button } from "./Button";
import { PlayerList } from "./PlayerList";

export const UI = () => {
  const { timer, startGame, host, stage, players } = useGameState();

  return (
    <main
      className={`fixed z-10 inset-0 pointer-events-none grid place-content-center justify-items-center
      ${stage === "lobby" ? "bg-black" : "bg-transparent"
        } transition-colors duration-1000`}
    >
      <PlayerList players={players} />
      {timer >= 0 && (
        <h2 className="absolute right-4 top-4 text-5xl text-white font-black">
          {timer}
        </h2>
      )}
      {stage === "lobby" && (
        <>
          <h1 className="text-white font-black text-7xl mb-40">
            Fall guys
          </h1>
          <h2 className="absolute right-4 bottom-4 text-sm text-white/30 font-medium">
            *by Артур Нахатакян, Илья Киняев, Магер Егор
          </h2>
          {host ? (
            <Button
              onClick={startGame}
            >
              START
            </Button>
          ) : (
            <p className="italic text-white">
              Ожидание начала старта...
            </p>
          )}
          <Button
            className="mt-4"
            onClick={openDiscordInviteDialog}
          >
            INVITE
          </Button>
        </>
      )}
    </main>
  );
};
