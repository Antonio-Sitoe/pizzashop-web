import { Cell, Pie, PieChart } from 'recharts'
import { BarChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import colors from 'tailwindcss/colors'

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart'

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.rose[500],
  colors.emerald[500],
  colors.violet[500]
]

const chartData = [
  { product: 'chrome', amount: 275, fill: 'var(--color-chrome)' },
  { product: 'safari', amount: 200, fill: 'var(--color-safari)' },
  { product: 'firefox', amount: 187, fill: 'var(--color-firefox)' },
  { product: 'edge', amount: 173, fill: 'var(--color-edge)' },
  { product: 'other', amount: 90, fill: 'var(--color-other)' }
]

const chartConfig = {
  amount: {
    label: 'Montante'
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig

export function PopularProductsChart(): JSX.Element {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="w-full flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
          <BarChart className="text-muted-foreground h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="product"
              cy="50%"
              cx="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              fill={colors.emerald['500']}
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {chartData[index].product.substring(0, 12).concat('...')} ({value})
                  </text>
                )
              }}
              labelLine={false}
            >
              {chartData.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
