"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { doseRateVsDistance } from "@/lib/physics";

interface Props {
  I1: number; // kGy/jam pada r1
  r1: number;
}

export default function DoseChart({ I1, r1 }: Props) {
  const distances = [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3, 4, 5];
  const data = doseRateVsDistance(I1, r1, distances);

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid stroke="#ffffff10" />
          <XAxis
            dataKey="distance"
            stroke="#6B6B6B"
            label={{ value: "Jarak (m)", position: "insideBottom", offset: -4, fill: "#6B6B6B" }}
          />
          <YAxis
            stroke="#6B6B6B"
            label={{ value: "Laju dosis (kGy/jam)", angle: -90, position: "insideLeft", fill: "#6B6B6B" }}
          />
          <Tooltip
            contentStyle={{ background: "#050B1A", border: "1px solid #00A4FF", borderRadius: 8 }}
            labelStyle={{ color: "#00A4FF" }}
          />
          <Line
            type="monotone"
            dataKey="rate"
            stroke="#00A4FF"
            strokeWidth={2}
            dot={{ r: 3, fill: "#00A4FF" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}