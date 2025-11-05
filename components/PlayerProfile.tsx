"use client";

import { Player } from "@/types/players";
import Container from "./aetherium/Container";
import Text from "./aetherium/Text";
import Image from "next/image";
import { darkenHex } from "@/lib/utils";
import { CSSProperties } from "react";

interface PlayerProfileProps {
  player: Player;
}

const LargeStat = ({ label, stat, style }: { label: string; stat: string | number; style?: CSSProperties | undefined }) => {
  return (
    <Container className="rounded-2xl p-4 text-center" style={style}>
      <Text className="text-slate-300">{label}</Text>
      <Text className="font-bold text-2xl">{stat}</Text>
    </Container>
  );
};

const SmallStat = ({ label, stat }: { label: string; stat: string | number }) => {
  return (
    <Container>
      <Text className="text-sm text-neutral-300">{label}</Text>
      <Text className="text-lg">{stat}</Text>
    </Container>
  );
};

const PlayerProfile = (props: PlayerProfileProps) => {
  return (
    <Container className="h-full flex flex-col bg-neutral-200">
      <Container
        className="relative h-1/2  p-8 space-y-4 overflow-hidden z-10"
        style={{
          background: `linear-gradient(to bottom, #${props.player.team.color} 0%, ${darkenHex(props.player.team.color, 60)} 100%)`,
        }}>
        {/* TEAM LOGO */}
        <Container className="absolute w-full h-full top-0 -left-24 -z-10">
          <Container className="relative w-full h-full">
            <Image src={props.player.team.logo} alt={`${props.player.team.name} logo.`} fill className="object-cover opacity-25" />
          </Container>
        </Container>

        {/* JERSEY, POSITION, TEAM */}
        <Container className="flex items-end gap-2">
          <Text
            id="jersey"
            className="text-4xl italic font-bold text-shadow-black text-shadow-sm"
            style={{ color: `#${props.player.team.alternateColor}` }}>
            #{props.player.jersey}
          </Text>
          <Text id="position" className="font-light text-shadow-black text-shadow-sm">
            {props.player.position.name}
          </Text>
          |
          <Text id="position" className="font-light text-shadow-black text-shadow-sm">
            {props.player.team.displayName}
          </Text>
        </Container>

        {/* NAME */}
        <Text id="name" className="text-5xl flex flex-col font-semibold gap-2 ">
          <Text as="span" className="text-shadow-black text-shadow-sm">
            {props.player.firstName.toUpperCase()}
          </Text>
          <Text as="span" className="text-shadow-black text-shadow-sm">
            {props.player.lastName.toUpperCase()}
          </Text>
        </Text>

        {/* HEADSHOT */}
        <Container className="absolute top-0 left-0 w-full h-full flex flex-col justify-end -z-10">
          <Container className="w-[85%] aspect-square relative left-1/4">
            <Image
              src={props.player.headshot.src}
              alt={props.player.headshot.alt}
              fill
              className="object-cover overflow-visible"
              sizes=""
            />
          </Container>
        </Container>
      </Container>

      {/* STATS */}
      <Container className="grow p-4 bg-neutral-200 relative">
        <Container
          className="rounded-2xl p-4 space-y-4 absolute -top-16 left-4 w-[calc(100%-2rem)] overflow-visible z-50"
          style={{
            background: `linear-gradient(to bottom, ${darkenHex(props.player.team.color, 100)} 0%, #${props.player.team.color} 100%)`,
          }}>
          <Container className="grid grid-cols-3 gap-2">
            <LargeStat
              label="PPG"
              stat="24.4"
              style={{
                backgroundColor: `#${props.player.team.color}`,
              }}
            />
            <LargeStat
              label="APG"
              stat="8.1"
              style={{
                backgroundColor: `#${props.player.team.color}`,
              }}
            />
            <LargeStat
              label="RPG"
              stat="9.4"
              style={{
                backgroundColor: `#${props.player.team.color}`,
              }}
            />
          </Container>
          <Container className="grid grid-cols-2 gap-4">
            <SmallStat label="Height" stat={props.player.displayHeight} />
            <SmallStat label="Weight" stat={props.player.displayWeight} />
            <SmallStat label="Country" stat={props.player.birthPlace.country} />
            <SmallStat label="Birthdate" stat={new Date(props.player.dateOfBirth).toDateString()} />
            <SmallStat label="Last Attended" stat={props.player.college.name ?? ""} />
            <SmallStat label="Draft" stat={props.player.draftYear} />
            <SmallStat label="Age" stat={props.player.age} />
            <SmallStat label="Experience" stat="5 Years" />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default PlayerProfile;
