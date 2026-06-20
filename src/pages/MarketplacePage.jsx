import { useState, useMemo } from 'react'
import BudgetRing from '../components/BudgetRing'
import ElectricCarCard from '../components/ElectricCarCard'
import BikeCard from '../components/BikeCard'
import TrainCard from '../components/TrainCard'
import WoonBonus from '../components/WoonBonus'
import { ShoppingBag, Info, RefreshCw } from 'lucide-react'

const TOTAL_BUDGET = 1200
const CAR_AMOUNT = 750
const TRAIN_AMOUNT = 50
const BIKE_DEFAULT = 80

export default function MarketplacePage() {
  const [hasElectric, setHasElectric] = useState(false)
  const [hasBike, setHasBike] = useState(false)
  const [bikeAmount, setBikeAmount] = useState(BIKE_DEFAULT)
  const [hasTrain, setHasTrain] = useState(false)

  const spent = useMemo(() => {
    let total = 0
    if (hasElectric) total += CAR_AMOUNT
    if (hasBike) total += bikeAmount
    if (hasTrain) total += TRAIN_AMOUNT
    return total
  }, [hasElectric, hasBike, bikeAmount, hasTrain])

  const remaining = Math.max(0, TOTAL_BUDGET - spent)
  const isOverBudget = spent > TOTAL_BUDGET

  function resetAll() {
    setHasElectric(false)
    setHasBike(false)
    setBikeAmount(BIKE_DEFAULT)
    setHasTrain(false)
  }

  return (
    <main>
      {/* Page header */}
      <section
        className="pt-28 pb-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #13231e 0%, #1c3028 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(173,255,0,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="container-mona relative z-10 text-center">
          <div className="badge mb-4 mx-auto w-fit">
            <ShoppingBag size={11} />
            Mobiliteitsmarktplaats
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl text-white mb-4">
            Stel jouw pakket samen
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Combineer mobiliteitsopties en zie in realtime wat je maandbudget van €{TOTAL_BUDGET} doet.
          </p>
        </div>
      </section>

      {/* Dashboard */}
      <section
        className="py-12 lg:py-16"
        style={{ background: '#1c3028' }}
        aria-label="Budget dashboard"
      >
        <div className="container-mona">

          {/* Budget ring + summary bar */}
          <div
            className="glass-card p-6 lg:p-10 mb-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Ring */}
            <div className="flex-shrink-0">
              <BudgetRing
                spent={spent}
                bikeAmount={bikeAmount}
                hasElectric={hasElectric}
                hasTrain={hasTrain}
              />
            </div>

            {/* Right side: breakdown + info */}
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-2xl lg:text-3xl text-white">
                  Budget overzicht
                </h2>
                <button
                  id="reset-budget"
                  onClick={resetAll}
                  className="flex items-center gap-1.5 text-xs text-white/35 hover:text-white/70 transition-colors"
                >
                  <RefreshCw size={12} />
                  Reset
                </button>
              </div>

              {/* Breakdown lines */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Totaal budget</span>
                  <span className="text-white font-semibold">€{TOTAL_BUDGET}/mnd</span>
                </div>
                {hasElectric && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-white/60">
                      <span className="w-2 h-2 rounded-full" style={{ background: '#adff00' }} />
                      Elektrische SUV-Lease
                    </span>
                    <span className="text-mona-neon font-medium">− €{CAR_AMOUNT}</span>
                  </div>
                )}
                {hasBike && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-white/60">
                      <span className="w-2 h-2 rounded-full bg-sky-400" />
                      Speed Pedelec-Lease
                    </span>
                    <span className="text-sky-400 font-medium">− €{bikeAmount}</span>
                  </div>
                )}
                {hasTrain && (
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5 text-white/60">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      NMBS Jaarabonnement
                    </span>
                    <span className="text-amber-400 font-medium">− €{TRAIN_AMOUNT}</span>
                  </div>
                )}
              </div>

              {/* Total remaining */}
              <div
                className="rounded-xl px-4 py-3.5 flex items-center justify-between"
                style={{
                  background: isOverBudget
                    ? 'rgba(239,68,68,0.1)'
                    : remaining > 0
                    ? 'rgba(52,211,153,0.1)'
                    : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${isOverBudget ? 'rgba(239,68,68,0.3)' : remaining > 0 ? 'rgba(52,211,153,0.25)' : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <span className="text-sm text-white/60">
                  {isOverBudget ? '⚠ Budget overschreden' : remaining > 0 ? '✓ Resterend budget' : '✓ Budget volledig gebruikt'}
                </span>
                <span
                  className={`font-bold text-xl ${
                    isOverBudget
                      ? 'text-red-400'
                      : remaining > 0
                      ? 'text-emerald-400'
                      : 'text-white'
                  }`}
                >
                  {isOverBudget ? `−€${(spent - TOTAL_BUDGET)}` : `€${remaining}`}
                </span>
              </div>

              {/* Info callout */}
              <div className="mt-4 flex items-start gap-2">
                <Info size={12} className="text-white/25 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/30 leading-relaxed">
                  Uw selectie wordt maandelijks verrekend vanuit uw mobiliteitsbudget.
                  Alle bedragen zijn vóór personenbelasting en RSZ; Pilaar 2-uitgaven zijn volledig vrijgesteld.
                </p>
              </div>
            </div>
          </div>

          {/* Product cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <ElectricCarCard
              active={hasElectric}
              onToggle={() => setHasElectric((v) => !v)}
            />
            <BikeCard
              active={hasBike}
              onToggle={() => setHasBike((v) => !v)}
              amount={bikeAmount}
              onAmountChange={setBikeAmount}
            />
            <TrainCard
              active={hasTrain}
              onToggle={() => setHasTrain((v) => !v)}
            />
          </div>

          {/* Woon-Bonus module */}
          {!isOverBudget && remaining > 0 && (
            <WoonBonus amount={remaining} />
          )}

          {/* Over budget warning */}
          {isOverBudget && (
            <div
              className="rounded-2xl p-5 flex items-start gap-3"
              style={{
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.2)',
              }}
            >
              <span className="text-red-400 text-lg">⚠</span>
              <div>
                <p className="text-red-400 font-semibold text-sm mb-1">Budget overschreden</p>
                <p className="text-white/50 text-xs">
                  Je hebt €{spent - TOTAL_BUDGET} meer geselecteerd dan je maandbudget van €{TOTAL_BUDGET}.
                  Verwijder of verlaag een van de geselecteerde opties.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
