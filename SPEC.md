# Arabic Letters Learning App - Specification

## Concept & Vision
An interactive Arabic alphabet learning application where letters are displayed as beautiful, tactile cards in random order. Clicking reveals the Bengali pronunciation, creating a satisfying reveal moment. The experience feels like flipping physical flashcards in a serene, focused learning environment.

## Design Language

### Aesthetic Direction
Minimalist Islamic-inspired design with subtle geometric patterns, soft shadows, and warm earth tones reminiscent of traditional Arabic manuscripts.

### Color Palette
- **Primary (Arabic letter):** `#1A1A2E` (deep navy)
- **Secondary (Bengali text):** `#16213E` (dark blue)
- **Accent:** `#E94560` (coral red for highlights)
- **Background:** `#F7F5F2` (warm off-white, paper-like)
- **Card Background:** `#FFFFFF` (pure white)
- **Card Border:** `#E8E4E0` (subtle warm gray)

### Typography
- **Arabic Letters:** `Amiri` (Google Font) - elegant traditional Arabic script
- **Bengali Pronunciation:** `Noto Sans Bengali` (Google Font) - clear Bengali script
- **UI Elements:** `Inter` (Google Font) - clean sans-serif

### Spatial System
- Card size: 300x300px (fixed)
- Card gap: 24px
- Page padding: 32px
- Border radius: 16px
- Shadow: `0 8px 32px rgba(0,0,0,0.08)`

### Motion Philosophy
- Card flip: 3D transform on Y-axis, 600ms ease-in-out
- Hover lift: translateY(-8px) with shadow expansion, 200ms
- Staggered entrance: cards fade in sequentially on load, 100ms delay between each
- Reset animation: all cards flip back simultaneously with 50ms stagger

## Layout & Structure

### Page Structure
1. **Header** - App title "Arabic Learning" with Bengali subtitle, centered
2. **Stats Bar** - Shows progress (X/Y letters viewed)
3. **Grid Container** - Responsive grid of letter cards, centered
4. **Reset Button** - Fixed at bottom, shuffles and resets all cards

### Responsive Strategy
- Desktop (>1024px): 4 columns
- Tablet (768-1024px): 3 columns
- Mobile landscape (480-768px): 2 columns
- Mobile portrait (<480px): 1 column
- Cards maintain 300x300px size, grid adjusts around them

## Features & Interactions

### Core Features
1. **Letter Display** - 28 Arabic letters (أ-ي) displayed as cards
2. **Random Shuffle** - Letters appear in randomized order on each session
3. **Pronunciation Reveal** - Click card to flip and show Bengali pronunciation
4. **Progress Tracking** - Count of viewed letters
5. **Reset/Shuffle** - Button to shuffle letters and reset all cards to face-down

### Interaction Details
- **Card Click:** Triggers 3D flip animation, reveals Bengali text on back
- **Card Hover:** Subtle lift effect with enhanced shadow
- **Reset Button Click:** All cards flip back, shuffle positions, reset progress
- **Mobile Touch:** Same as click, optimized for touch events

### Letter-Pronunciation Mapping
Each Arabic letter mapped to its Bengali transliteration (e.g., ا = আলিফ, ب = বা, ت = তা, etc.)

## Component Inventory

### Letter Card
- **Default State:** White card with centered Arabic letter in large font, subtle shadow
- **Hover State:** Lifts up, shadow expands, slight scale (1.02)
- **Flipped State:** Shows Bengali pronunciation, accent color border
- **Dimensions:** 300x300px fixed

### Reset Button
- **Default:** Coral accent background, white text, rounded
- **Hover:** Darker shade, slight scale up
- **Active:** Press down effect

### Progress Counter
- **Display:** "Viewed: X / 28" format
- **Updates:** On each card flip

## Technical Approach
- **Framework:** Vanilla HTML/CSS/JavaScript (single file)
- **No build step required**
- **CSS Grid** for responsive layout
- **CSS 3D Transforms** for card flip
- **Google Fonts** via CDN
- **LocalStorage:** Not needed (ephemeral state)



