'use client'

import { useState, useMemo } from 'react'

// Per-cycle energy constants calibrated for 25,000m³/hr AHP booth
// These values reproduce the old site's CO2 outputs (71.4t trad / 6.0t Zeus)
const GAS_TRAD  = 1626  // kWh gas  — traditional booth per cycle
const ELEC_TRAD = 30    // kWh elec — traditional booth per cycle
const GAS_SAVE  = 439   // kWh gas  — with energy saving features
const ELEC_SAVE = 18    // kWh elec — with energy saving features
const ELEC_ZEUS = 110   // kWh elec — Zeus FIR all-electric (no gas)
const WEEKS     = 48    // operational weeks per year
const CO2_GAS   = 0.183 // kg CO₂e per kWh natural gas
const CO2_ELEC  = 0.233 // kg CO₂e per kWh UK grid electricity

function fmt(n: number) {
  if (n >= 100000) return `£${(n / 1000).toFixed(0)}k`
  if (n >= 10000)  return `£${(n / 1000).toFixed(1)}k`
  return `£${Math.round(n).toLocaleString()}`
}
function fmtCO2(n: number) { return `${n.toFixed(1)}` }

export default function EnergyCalculator() {
  const [gasRate,  setGasRate]  = useState(0.04)
  const [elecRate, setElecRate] = useState(0.25)
  const [cycles,   setCycles]   = useState(5)

  const annual = cycles * WEEKS

  const r = useMemo(() => {
    const tCost = annual * (GAS_TRAD  * gasRate + ELEC_TRAD  * elecRate)
    const sCost = annual * (GAS_SAVE  * gasRate + ELEC_SAVE  * elecRate)
    const zCost = annual * (ELEC_ZEUS * elecRate)
    const tCO2  = annual * (GAS_TRAD  * CO2_GAS + ELEC_TRAD  * CO2_ELEC) / 1000
    const sCO2  = annual * (GAS_SAVE  * CO2_GAS + ELEC_SAVE  * CO2_ELEC) / 1000
    const zCO2  = annual * (ELEC_ZEUS * CO2_ELEC) / 1000
    return {
      tCost, sCost, zCost, tCO2, sCO2, zCO2,
      savEnergy : tCost - sCost,
      savZeus   : tCost - zCost,
      co2PctZeus: tCO2 > 0 ? Math.round((tCO2 - zCO2) / tCO2 * 100) : 0,
    }
  }, [gasRate, elecRate, cycles, annual])

  return (
    <section className="calc-sec">
      <div className="calc-inner">
        <div className="calc-header rv">
          <div className="s-lbl">Energy Cost Calculator</div>
          <h2 className="s-h2">See your annual savings.</h2>
          <p className="s-p mw-560">Enter your energy rates and booth usage to see what switching to all-electric Zeus technology saves your operation — in cost and carbon.</p>
        </div>

        <div className="calc-card rv">
          {/* Inputs */}
          <div className="calc-inputs">
            <div className="calc-field">
              <label className="calc-label">Gas Cost (£/kWh)</label>
              <input
                className="calc-input"
                type="number" step="0.001" min="0.001" max="2"
                value={gasRate}
                onChange={e => setGasRate(Math.max(0.001, parseFloat(e.target.value) || 0.04))}
              />
            </div>
            <div className="calc-field">
              <label className="calc-label">Electric Cost (£/kWh)</label>
              <input
                className="calc-input"
                type="number" step="0.01" min="0.01" max="5"
                value={elecRate}
                onChange={e => setElecRate(Math.max(0.01, parseFloat(e.target.value) || 0.25))}
              />
            </div>
            <div className="calc-field">
              <label className="calc-label">Cycles / Week</label>
              <input
                className="calc-input"
                type="number" step="1" min="1" max="200"
                value={cycles}
                onChange={e => setCycles(Math.max(1, parseInt(e.target.value) || 5))}
              />
            </div>
          </div>

          {/* Results */}
          <div className="calc-results">
            <div className="calc-col">
              <div className="calc-col-tag calc-tag-trad">Traditional</div>
              <div className="calc-big">{fmt(r.tCost)}<span className="calc-per">/yr</span></div>
              <div className="calc-co2-row">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {fmtCO2(r.tCO2)} t CO₂e / yr
              </div>
            </div>

            <div className="calc-col">
              <div className="calc-col-tag calc-tag-save">Energy Saving</div>
              <div className="calc-big">{fmt(r.sCost)}<span className="calc-per">/yr</span></div>
              <div className="calc-co2-row">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {fmtCO2(r.sCO2)} t CO₂e / yr
              </div>
              <div className="calc-saving">Save {fmt(r.savEnergy)} / yr</div>
            </div>

            <div className="calc-col calc-col-zeus">
              <div className="calc-col-tag calc-tag-zeus">Zeus All-Electric</div>
              <div className="calc-big calc-big-zeus">{fmt(r.zCost)}<span className="calc-per">/yr</span></div>
              <div className="calc-co2-row calc-co2-zeus">
                <svg viewBox="0 0 16 16" fill="none"><path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {fmtCO2(r.zCO2)} t CO₂e / yr
              </div>
              <div className="calc-saving calc-saving-zeus">
                Save {fmt(r.savZeus)} / yr · {r.co2PctZeus}% less carbon
              </div>
            </div>
          </div>

          <p className="calc-note">
            Based on 25,000m³/hr AHP · {annual} annual cycles ({cycles}/week × 48 weeks) · CO₂ factors: gas 0.183 kg/kWh, UK grid 0.233 kg/kWh
          </p>
        </div>
      </div>
    </section>
  )
}
