
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "lottie-unit-definition",
    "description": "Specification for the unit definition of the player for running animations.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "lottie-unit-definition@2.5",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Verona Player Lottie Unit Definition",
        "type": "object",
        "additionalProperties": false,
        "required": [
          "id",
          "version",
          "backgroundColor",
          "scenes",
          "animations"
        ],
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique identifier for the unit definition",
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "version": {
            "type": "string",
            "description": "Version of the unit definition format",
            "x-parser-schema-id": "<anonymous-schema-2>"
          },
          "backgroundColor": {
            "type": "string",
            "pattern": "^#([A-Fa-f0-9]{3}){1,2}$",
            "description": "Background color of the unit in hex format",
            "x-parser-schema-id": "<anonymous-schema-3>"
          },
          "navigationTarget": {
            "type": "string",
            "description": "Navigation target to be send when all scenes are finished",
            "enum": [
              "end",
              "next"
            ],
            "default": "next",
            "x-parser-schema-id": "<anonymous-schema-4>"
          },
          "scenes": {
            "type": "array",
            "description": "Array of scenes, each with different background and layout settings",
            "items": {
              "type": "object",
              "required": [
                "id",
                "script"
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "description": "identifier of scene",
                  "x-parser-schema-id": "<anonymous-schema-7>"
                },
                "cockpitSrc": {
                  "type": "string",
                  "description": "Image File (best svg or transparent png) to use on top of the animations",
                  "contentEncoding": "base64",
                  "x-parser-schema-id": "<anonymous-schema-8>"
                },
                "backgroundIds": {
                  "type": "array",
                  "description": "Array of animations as Ids in the background for the whole scene. First in array will be on top.",
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-9>"
                },
                "foregroundIds": {
                  "type": "array",
                  "description": "Array of animations as Ids in the foreground for the whole scene. First in array will be on top.",
                  "items": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-11>"
                },
                "script": {
                  "type": "array",
                  "description": "Array of animations and audio to run after each other",
                  "items": {
                    "type": "object",
                    "required": [
                      "id",
                      "animations"
                    ],
                    "properties": {
                      "id": {
                        "type": "string",
                        "description": "identifier of this part of the scene",
                        "x-parser-schema-id": "<anonymous-schema-15>"
                      },
                      "loopTarget": {
                        "type": "string",
                        "description": "Id of the animation slot to listen for loop completed",
                        "default": "main or first in array",
                        "x-parser-schema-id": "<anonymous-schema-16>"
                      },
                      "loopCount": {
                        "type": "integer",
                        "description": "Number of loops to be played (zero for unlimited)",
                        "default": 0,
                        "x-parser-schema-id": "<anonymous-schema-17>"
                      },
                      "animations": {
                        "type": "array",
                        "description": "Array of animations to be shown, might be empty array",
                        "items": {
                          "type": "object",
                          "required": [
                            "animationId"
                          ],
                          "properties": {
                            "slotId": {
                              "type": "string",
                              "description": "Id of the animation slot the animation should be put in as identifier",
                              "x-parser-schema-id": "<anonymous-schema-20>"
                            },
                            "animationId": {
                              "type": "string",
                              "contentEncoding": "Id of animation as identifier",
                              "x-parser-schema-id": "<anonymous-schema-21>"
                            },
                            "loop": {
                              "type": "boolean",
                              "description": "Boolean if the animation should run in a loop",
                              "default": true,
                              "x-parser-schema-id": "<anonymous-schema-22>"
                            },
                            "loopCount": {
                              "type": "number",
                              "description": "specify after how many loops the animation will stop, 0 for infinite loop",
                              "default": 0,
                              "x-parser-schema-id": "<anonymous-schema-23>"
                            },
                            "speed": {
                              "type": "number",
                              "description": "speed of animation to run",
                              "default": 1,
                              "x-parser-schema-id": "<anonymous-schema-24>"
                            }
                          },
                          "x-parser-schema-id": "<anonymous-schema-19>"
                        },
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      },
                      "audioSrc": {
                        "type": "string",
                        "description": "Audio to be played along the animations",
                        "contentEncoding": "base64",
                        "x-parser-schema-id": "<anonymous-schema-25>"
                      },
                      "waitForAudioToFinish": {
                        "type": "boolean",
                        "description": "Wait for the audio to finish to proceed to next animation/scene",
                        "default": false,
                        "x-parser-schema-id": "<anonymous-schema-26>"
                      }
                    },
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "interaction": {
                  "type": "boolean",
                  "description": "Toggle if an interaction should be overlayed",
                  "default": false,
                  "x-parser-schema-id": "<anonymous-schema-27>"
                },
                "interactionType": {
                  "type": "string",
                  "description": "Type of Interaction",
                  "enum": [
                    "BUTTONS",
                    "CLICK_LAYER"
                  ],
                  "default": "BUTTONS",
                  "x-parser-schema-id": "<anonymous-schema-28>"
                },
                "interactionParameters": {
                  "type": "object",
                  "properties": {
                    "variableId": {
                      "type": "string",
                      "description": "Id of the variable, the answer will be stored as IQB Response",
                      "x-parser-schema-id": "<anonymous-schema-30>"
                    },
                    "sharedId": {
                      "type": "string",
                      "description": "Id of the SharedParameter, the answer will be stored as",
                      "x-parser-schema-id": "<anonymous-schema-31>"
                    },
                    "options": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [
                          "value"
                        ],
                        "properties": {
                          "imageSrc": {
                            "type": "string",
                            "description": "image or lottie file",
                            "contentEncoding": "base64",
                            "x-parser-schema-id": "<anonymous-schema-34>"
                          },
                          "label": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-35>"
                          },
                          "value": {
                            "type": "string",
                            "x-parser-schema-id": "<anonymous-schema-36>"
                          },
                          "speed": {
                            "type": "number",
                            "description": "speed of animation when lottie animation is provided as ImageSrc",
                            "default": 1,
                            "x-parser-schema-id": "<anonymous-schema-37>"
                          }
                        },
                        "x-parser-schema-id": "<anonymous-schema-33>"
                      },
                      "x-parser-schema-id": "<anonymous-schema-32>"
                    }
                  },
                  "x-parser-schema-id": "<anonymous-schema-29>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-6>"
            },
            "x-parser-schema-id": "<anonymous-schema-5>"
          },
          "slotDefinitions": {
            "type": "array",
            "description": "Definition of slots in which animation will run",
            "items": {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "description": "identifier of the animation slot",
                  "x-parser-schema-id": "<anonymous-schema-40>"
                },
                "zindex": {
                  "type": "number",
                  "description": "z-index of the animation slot for layering",
                  "x-parser-schema-id": "<anonymous-schema-41>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-39>"
            },
            "x-parser-schema-id": "<anonymous-schema-38>"
          },
          "animations": {
            "type": "array",
            "description": "List of all animations used",
            "items": {
              "type": "object",
              "required": [
                "id"
              ],
              "properties": {
                "id": {
                  "type": "string",
                  "description": "Id of animation used as identifier",
                  "x-parser-schema-id": "<anonymous-schema-44>"
                },
                "animationSrc": {
                  "type": "string",
                  "description": "animation Source for a single animation",
                  "contentEncoding": "base64",
                  "x-parser-schema-id": "<anonymous-schema-45>"
                },
                "animations": {
                  "type": "array",
                  "description": "array of possible animations to choose from",
                  "items": {
                    "type": "object",
                    "required": [
                      "id",
                      "animationSrc"
                    ],
                    "id": {
                      "type": "string",
                      "description": "value of the SharedParameter to choose the animation with"
                    },
                    "animationSrc": {
                      "type": "string",
                      "description": "animation Source for a single animation",
                      "contentEncoding": "base64"
                    },
                    "x-parser-schema-id": "<anonymous-schema-47>"
                  },
                  "x-parser-schema-id": "<anonymous-schema-46>"
                },
                "parameterId": {
                  "type": "string",
                  "description": "Id of the SharedParameter to choose which animation has to be used",
                  "x-parser-schema-id": "<anonymous-schema-48>"
                }
              },
              "x-parser-schema-id": "<anonymous-schema-43>"
            },
            "x-parser-schema-id": "<anonymous-schema-42>"
          },
          "loadExternalAnimations": {
            "type": "string",
            "description": "Filename of external file with animation data to load",
            "x-parser-schema-id": "<anonymous-schema-49>"
          }
        },
        "definitions": {
          "SceneData": "$ref:$.components.schemas.metadata-values.properties.scenes.items",
          "ScriptData": "$ref:$.components.schemas.metadata-values.properties.scenes.items.properties.script.items",
          "SlotDefinition": "$ref:$.components.schemas.metadata-values.properties.slotDefinitions.items",
          "SceneAnimationData": "$ref:$.components.schemas.metadata-values.properties.scenes.items.properties.script.items.properties.animations.items",
          "AnimationData": "$ref:$.components.schemas.metadata-values.properties.animations.items",
          "AnimationsData": "$ref:$.components.schemas.metadata-values.properties.animations.items.properties.animations.items",
          "InteractionParameters": "$ref:$.components.schemas.metadata-values.properties.scenes.items.properties.interactionParameters",
          "InteractionOptions": "$ref:$.components.schemas.metadata-values.properties.scenes.items.properties.interactionParameters.properties.options.items"
        },
        "x-parser-schema-id": "lottie-unit-definition@2.5"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  