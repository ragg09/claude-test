"use client";

import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import Typography from "@/components/ui/typography";
import { Card } from "@/components/ui/Card";

export default function PreviewPage() {
  const [modals, setModals] = useState({
    primary: false,
    secondary: false,
    success: false,
    danger: false,
    warning: false,
    small: false,
    medium: false,
    large: false,
    disabled: false,
    simple: false,
  });

  const openModal = (key: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  };

  const closeModal = (key: keyof typeof modals) => {
    setModals((prev) => ({ ...prev, [key]: false }));
  };
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Component Preview
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Demo page showcasing the available UI components and their variants.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Navbar Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Default Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Navbar variant="default" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Compact Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Navbar variant="compact" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Transparent Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
                  <Navbar variant="transparent" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Button Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="flex flex-wrap gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="warning">Warning</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Size Variants
                </h3>
                <div className="flex items-end gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  States
                </h3>
                <div className="flex flex-wrap gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button variant="primary">Normal</Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  All Combinations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(
                    [
                      "primary",
                      "secondary",
                      "success",
                      "danger",
                      "warning",
                    ] as const
                  ).map((variant) => (
                    <div
                      key={variant}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 capitalize">
                        {variant}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex gap-2">
                          <Button variant={variant} size="sm">
                            Small
                          </Button>
                          <Button variant={variant} size="md">
                            Medium
                          </Button>
                          <Button variant={variant} size="lg">
                            Large
                          </Button>
                        </div>
                        <div className="flex gap-2">
                          <Button variant={variant} size="sm" disabled>
                            Small
                          </Button>
                          <Button variant={variant} size="md" disabled>
                            Medium
                          </Button>
                          <Button variant={variant} size="lg" disabled>
                            Large
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Modal Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="flex flex-wrap gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button
                    variant="primary"
                    onClick={() => openModal("primary")}
                  >
                    Open Primary Modal
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => openModal("secondary")}
                  >
                    Open Secondary Modal
                  </Button>
                  <Button
                    variant="success"
                    onClick={() => openModal("success")}
                  >
                    Open Success Modal
                  </Button>
                  <Button variant="danger" onClick={() => openModal("danger")}>
                    Open Danger Modal
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => openModal("warning")}
                  >
                    Open Warning Modal
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Size Variants
                </h3>
                <div className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button size="sm" onClick={() => openModal("small")}>
                    Small Modal
                  </Button>
                  <Button size="md" onClick={() => openModal("medium")}>
                    Medium Modal
                  </Button>
                  <Button size="lg" onClick={() => openModal("large")}>
                    Large Modal
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  States and Options
                </h3>
                <div className="flex flex-wrap gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Button
                    variant="primary"
                    onClick={() => openModal("disabled")}
                  >
                    Disabled Modal
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => openModal("simple")}
                  >
                    Simple Modal (No Title)
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal Components */}
            <Modal
              isOpen={modals.primary}
              onClose={() => closeModal("primary")}
              title="Primary Modal"
              variant="primary"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a primary modal with a blue header and border. It
                  demonstrates the primary variant styling.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="primary"
                    onClick={() => closeModal("primary")}
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => closeModal("primary")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modals.secondary}
              onClose={() => closeModal("secondary")}
              title="Secondary Modal"
              variant="secondary"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a secondary modal with a gray header and border.
                </p>
                <Button
                  variant="secondary"
                  onClick={() => closeModal("secondary")}
                >
                  Close
                </Button>
              </div>
            </Modal>

            <Modal
              isOpen={modals.success}
              onClose={() => closeModal("success")}
              title="Success Modal"
              variant="success"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a success modal with a green header and border,
                  typically used for positive feedback.
                </p>
                <Button variant="success" onClick={() => closeModal("success")}>
                  Great!
                </Button>
              </div>
            </Modal>

            <Modal
              isOpen={modals.danger}
              onClose={() => closeModal("danger")}
              title="Danger Modal"
              variant="danger"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a danger modal with a red header and border, typically
                  used for destructive actions or errors.
                </p>
                <div className="flex gap-2">
                  <Button variant="danger" onClick={() => closeModal("danger")}>
                    Delete
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => closeModal("danger")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modals.warning}
              onClose={() => closeModal("warning")}
              title="Warning Modal"
              variant="warning"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a warning modal with an orange header and border,
                  typically used for cautionary messages.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="warning"
                    onClick={() => closeModal("warning")}
                  >
                    Proceed
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => closeModal("warning")}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={modals.small}
              onClose={() => closeModal("small")}
              title="Small Modal"
              size="sm"
            >
              <p className="text-gray-600 dark:text-gray-300">
                This is a small modal (max-width: 28rem).
              </p>
            </Modal>

            <Modal
              isOpen={modals.medium}
              onClose={() => closeModal("medium")}
              title="Medium Modal"
              size="md"
            >
              <p className="text-gray-600 dark:text-gray-300">
                This is a medium modal (max-width: 32rem). This is the default
                size.
              </p>
            </Modal>

            <Modal
              isOpen={modals.large}
              onClose={() => closeModal("large")}
              title="Large Modal"
              size="lg"
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This is a large modal (max-width: 42rem). It provides more
                  space for content.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Modal>

            <Modal
              isOpen={modals.disabled}
              onClose={() => closeModal("disabled")}
              title="Disabled Modal"
              disabled={true}
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  This modal is disabled. You cannot close it by clicking the
                  overlay, pressing Escape, or clicking the close button.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Note: In a real application, you would provide an alternative
                  way to close a disabled modal.
                </p>
                <Button
                  variant="primary"
                  onClick={() => closeModal("disabled")}
                  className="opacity-50 cursor-not-allowed"
                  disabled
                >
                  This button is also disabled
                </Button>
              </div>
            </Modal>

            <Modal
              isOpen={modals.simple}
              onClose={() => closeModal("simple")}
              showCloseButton={true}
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Simple Modal without Title Bar
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  This modal doesnt have a colored header bar, just the close
                  button in the top-right corner.
                </p>
                <Button variant="primary" onClick={() => closeModal("simple")}>
                  Close
                </Button>
              </div>
            </Modal>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Typography Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Typography variant="primary" size="lg" element="h3">
                    Primary Typography
                  </Typography>
                  <Typography variant="secondary" size="lg" element="h3">
                    Secondary Typography
                  </Typography>
                  <Typography variant="success" size="lg" element="h3">
                    Success Typography
                  </Typography>
                  <Typography variant="danger" size="lg" element="h3">
                    Danger Typography
                  </Typography>
                  <Typography variant="warning" size="lg" element="h3">
                    Warning Typography
                  </Typography>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Size Variants
                </h3>
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Typography size="sm">
                    Small typography - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                  <Typography size="md">
                    Medium typography - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                  <Typography size="lg">
                    Large typography - Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </Typography>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Weight Variants
                </h3>
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Typography weight="normal">
                    Normal weight typography
                  </Typography>
                  <Typography weight="medium">
                    Medium weight typography
                  </Typography>
                  <Typography weight="semibold">
                    Semibold weight typography
                  </Typography>
                  <Typography weight="bold">Bold weight typography</Typography>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Element Types
                </h3>
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Typography element="h1" size="lg" weight="bold">
                    H1 Heading Element
                  </Typography>
                  <Typography element="h2" size="lg" weight="semibold">
                    H2 Heading Element
                  </Typography>
                  <Typography element="h3" size="md" weight="medium">
                    H3 Heading Element
                  </Typography>
                  <Typography element="p">
                    Paragraph element with regular text content
                  </Typography>
                  <Typography element="span" variant="secondary">
                    Span element for inline text
                  </Typography>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  States
                </h3>
                <div className="space-y-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Typography variant="primary">
                    Normal state typography
                  </Typography>
                  <Typography variant="primary" disabled>
                    Disabled state typography
                  </Typography>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  All Combinations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(
                    [
                      "primary",
                      "secondary",
                      "success",
                      "danger",
                      "warning",
                    ] as const
                  ).map((variant) => (
                    <div
                      key={variant}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3 capitalize">
                        {variant}
                      </h4>
                      <div className="space-y-2">
                        <Typography variant={variant} size="sm" weight="normal">
                          Small Normal
                        </Typography>
                        <Typography variant={variant} size="md" weight="medium">
                          Medium Medium
                        </Typography>
                        <Typography variant={variant} size="lg" weight="bold">
                          Large Bold
                        </Typography>
                        <Typography variant={variant} size="md" disabled>
                          Disabled
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Card Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Color Variants
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card variant="primary">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Primary Card
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This is a primary card with blue border styling.
                    </p>
                    <Button variant="primary" size="sm">
                      Action
                    </Button>
                  </Card>

                  <Card variant="secondary">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Secondary Card
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This is a secondary card with gray border styling.
                    </p>
                    <Button variant="secondary" size="sm">
                      Action
                    </Button>
                  </Card>

                  <Card variant="success">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Success Card
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This is a success card with green border styling.
                    </p>
                    <Button variant="success" size="sm">
                      Action
                    </Button>
                  </Card>

                  <Card variant="danger">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Danger Card
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This is a danger card with red border styling.
                    </p>
                    <Button variant="danger" size="sm">
                      Action
                    </Button>
                  </Card>

                  <Card variant="warning">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Warning Card
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This is a warning card with amber border styling.
                    </p>
                    <Button variant="warning" size="sm">
                      Action
                    </Button>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Size Variants
                </h3>
                <div className="space-y-4">
                  <Card size="sm" variant="primary">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Small Card
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      This is a small card with reduced padding (p-4).
                    </p>
                  </Card>

                  <Card size="md" variant="secondary">
                    <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      Medium Card (Default)
                    </h4>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      This is a medium card with standard padding (p-6). This is
                      the default size.
                    </p>
                  </Card>

                  <Card size="lg" variant="success">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Large Card
                    </h4>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                      This is a large card with increased padding (p-8). It
                      provides more breathing room for content.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="success" size="sm">
                        Primary Action
                      </Button>
                      <Button variant="secondary" size="sm">
                        Secondary
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  States
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card variant="primary">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Normal State
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This card is in normal state and fully interactive.
                    </p>
                    <Button variant="primary" size="sm">
                      Clickable
                    </Button>
                  </Card>

                  <Card variant="primary" disabled>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Disabled State
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      This card is disabled and has reduced opacity.
                    </p>
                    <Button variant="primary" size="sm" disabled>
                      Disabled
                    </Button>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  All Combinations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(
                    [
                      "primary",
                      "secondary",
                      "success",
                      "danger",
                      "warning",
                    ] as const
                  ).map((variant) => (
                    <div key={variant} className="space-y-3">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                        {variant} Cards
                      </h4>
                      <div className="space-y-2">
                        <Card variant={variant} size="sm">
                          <Typography
                            variant={variant}
                            size="sm"
                            weight="medium"
                          >
                            Small {variant}
                          </Typography>
                        </Card>
                        <Card variant={variant} size="md">
                          <Typography
                            variant={variant}
                            size="md"
                            weight="medium"
                          >
                            Medium {variant}
                          </Typography>
                        </Card>
                        <Card variant={variant} size="lg">
                          <Typography
                            variant={variant}
                            size="lg"
                            weight="medium"
                          >
                            Large {variant}
                          </Typography>
                        </Card>
                        <Card variant={variant} size="md" disabled>
                          <Typography
                            variant={variant}
                            size="md"
                            weight="medium"
                            disabled
                          >
                            Disabled
                          </Typography>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Complex Content Examples
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card variant="primary" size="lg">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        User Profile
                      </h4>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        JS
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          John Smith
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          john.smith@example.com
                        </p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">
                          Projects
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          12
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-300">
                          Tasks Completed
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          89
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="primary" size="sm">
                        Edit Profile
                      </Button>
                      <Button variant="secondary" size="sm">
                        View Details
                      </Button>
                    </div>
                  </Card>

                  <Card variant="success" size="lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-600 dark:text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Task Completed!
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your project has been successfully deployed to
                        production.
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">
                            Build Time
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            2m 34s
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">
                            Deploy Status
                          </span>
                          <span className="font-medium text-green-600 dark:text-green-400">
                            Live
                          </span>
                        </div>
                      </div>
                      <Button variant="success" size="sm">
                        View Deployment
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Sample UI Elements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Card Component
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a sample card component showing how content would
                  look.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Action Button
                </button>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Form Elements
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Sample input"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Status Indicators
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Active
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Warning
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">
                      Error
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
