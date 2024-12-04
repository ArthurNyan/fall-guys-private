export const PlayerList = ({ players }) => (
    <div className="absolute top-28 left-4 md:top-4 md:-translate-x-1/2 md:left-1/2 flex flex-col md:flex-row gap-4">
        {players.map((p) => (
            <div key={p.state.id} className="flex flex-col items-center">
                <img
                    className={`w-12 h-12 rounded-full ${p.state.getState("dead") ? "filter grayscale" : ""
                        }`}
                    src={p.state.state.profile.photo}
                />
                <p className="text-white max-w-20 truncate">
                    {p.state.state.profile.name}
                </p>
            </div>
        ))}
    </div>
)