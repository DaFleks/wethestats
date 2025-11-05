import Container from "@/components/aetherium/Container";
import PlayerProfile from "@/components/PlayerProfile";
import { getPlayer } from "@/lib/api/players";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const player = await getPlayer(slug);

  return <PlayerProfile player={player}/>;
};

export default page;
