import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, TooltipProps } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import { ChartConfig, ChartContainer } from '@/components/ui/chart'

const chartData = [
  { date: 'January', desktop: 186 },
  { date: 'February', desktop: 305 },
  { date: 'March', desktop: 237 },
  { date: 'April', desktop: 73 },
  { date: 'May', desktop: 209 },
  { date: 'June', desktop: 214 }
]

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig

function CustomTooltip({
  active,
  payload,
  label
}: TooltipProps<number, number>): JSX.Element | null {
  if (active && payload && payload.length) {
    return (
      <div className="flex gap-1 rounded-l border bg-card p-2 text-sm text-card-foreground shadow-sm">
        <span className="font-semibold">{label}</span>
        <span>-</span>
        <span>
          {payload[0].value?.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })}
        </span>
      </div>
    )
  }

  return null
}

export function ReceiptChart(): JSX.Element {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no Periodo</CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-full max-h-[260px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              bottom: 12
            }}
            className="text-sm"
          >
            <CartesianGrid vertical={false} className="stroke-muted" />
            <XAxis dataKey="date" stroke="#888888" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              tickLine={false}
              stroke="#888"
              axisLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'MZN'
                })
              }
            />
            <Tooltip cursor={false} content={<CustomTooltip />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
